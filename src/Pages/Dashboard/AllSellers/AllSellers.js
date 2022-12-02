import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/Confirmation/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
    const [deletingSeller, setDeletingSeller] = useState(null);

    const closeModal = () => {
        setDeletingSeller(null);
    }

    const { data: allSellers, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            try {
                const res = await fetch('https://lapsell-corner-server.vercel.app/sellers');
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleSellerStatus = (id, email, verify) => {
        fetch("https://lapsell-corner-server.vercel.app/users/sellerStatus", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ id, email, verify }),
        })
            .then((res) => res.json())
            .then((data) => {
                refetch();
            });

    }
    const handleDeleteSeller = seller => {
        fetch(`https://lapsell-corner-server.vercel.app/users/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Seller ${seller.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-7'>
            <h2 className="text-3xl text-center font-semibold mb-5">All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {allSellers.map((seller, index) => <tr key={seller._id}>
                            <th>{index + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td><button onClick={() => handleSellerStatus(seller._id, seller.email, seller.verify)} className='btn btn-secondary'>{seller.verify ? "Verified" : "Verify"}</button></td>
                            <td><label
                                onClick={() => setDeletingSeller(seller)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
            {
                deletingSeller && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingSeller.name}. It cannot be undone.`}
                    successAction={handleDeleteSeller}
                    successButtonName="Delete"
                    modalData={deletingSeller}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllSellers;