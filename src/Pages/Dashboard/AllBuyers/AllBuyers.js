import React, { useState } from 'react';
import ConfirmationModal from '../../Shared/Confirmation/ConfirmationModal';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
    const [deletingBuyer, setDeletingBuyer] = useState(null);

    const closeModal = () => {
        setDeletingBuyer(null);
    }

    const { data: allBuyers, isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            try {
                const res = await fetch('https://lapsell-corner-server.vercel.app/buyers');
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });
    const handleDeleteBuyer = buyer => {
        fetch(`https://lapsell-corner-server.vercel.app/users/${buyer._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Buyer ${buyer.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-7'>
            <h2 className="text-3xl text-center font-semibold mb-5">All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {allBuyers.map((buyer, index) => <tr key={buyer._id}>
                            <th>{index + 1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td><label
                                onClick={() => setDeletingBuyer(buyer)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
            {
                deletingBuyer && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingBuyer.name}. It cannot be undone.`}
                    successAction={handleDeleteBuyer}
                    successButtonName="Delete"
                    modalData={deletingBuyer}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllBuyers;