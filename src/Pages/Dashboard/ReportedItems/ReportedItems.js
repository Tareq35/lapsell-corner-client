import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/Confirmation/ConfirmationModal';

const ReportedItems = () => {
    const [deletingReport, setDeletingReport] = useState(null);

    const closeModal = () => {
        setDeletingReport(null);
    }

    const { data: reportedProducts, isLoading, refetch } = useQuery({
        queryKey: ['reportedProducts'],
        queryFn: async () => {
            try {
                const res = await fetch('https://lapsell-corner-server.vercel.app/reportedProducts');
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });
    const handleDeleteReportedProduct = product => {
        fetch(`https://lapsell-corner-server.vercel.app/reportedProducts/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Product ${product.product_name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-7'>
            <h2 className='text-3xl text-center font-semibold mb-5'>Reported Items</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Comment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportedProducts.map((product, index) => <tr key={product._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={product.reportProduct.img} alt="" />
                                    </div>
                                </div>
                            </td>
                            <td>{product.reportProduct.product_name}</td>
                            <td className='truncate'>{product.comment}</td>
                            <td>
                                <label
                                    onClick={() => setDeletingReport(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
            {
                deletingReport && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingReport.name}. It cannot be undone.`}
                    successAction={handleDeleteReportedProduct}
                    successButtonName="Delete"
                    modalData={deletingReport}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ReportedItems;