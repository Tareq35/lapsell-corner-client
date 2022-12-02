import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import ConfirmationModal from '../../Shared/Confirmation/ConfirmationModal';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }

    const url = `https://lapsell-corner-server.vercel.app/products/${user?.email}`;

    const { data: myProducts = [], refetch } = useQuery({

        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handleAdvertise = (id, advertiseStatus) => {
        fetch("https://lapsell-corner-server.vercel.app/products", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, advertiseStatus }),
        })
            .then((res) => res.json())
            .then((data) => {
                refetch();
            });

    }
    const handleDeleteProduct = product => {
        fetch(`https://lapsell-corner-server.vercel.app/products/${product._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Product ${product.product_name} deleted successfully`)
                }
            })
    }
    return (
        <div className='my-7'>
            <h2 className='text-3xl text-center font-semibold mb-5'>My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myProducts && myProducts.map((product, i) => <tr key={product._id}>
                            <th>{i + 1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={product.img} alt="" />
                                    </div>
                                </div>
                            </td>
                            <td>{product.product_name}</td>
                            <td>$ {product.resale_price}</td>
                            <td>{product.sales_status}</td>
                            <td>
                                <button onClick={() => handleAdvertise(product._id, product.advertise)}
                                    className='btn btn-primary btn-sm'
                                >{product.advertise === true ? "Advertise On" : "Advertise Off"}</button>

                            </td>
                            <td>
                                <label
                                    onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>

                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.product_name}. It cannot be undone.`}
                    successAction={handleDeleteProduct}
                    successButtonName="Delete"
                    modalData={deletingProduct}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;