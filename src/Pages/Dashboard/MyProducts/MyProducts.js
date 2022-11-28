import React from 'react';
import { Link } from 'react-router-dom';

const MyProducts = () => {
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
                        <tr>
                            <th>1</th>
                            <td>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src='' alt="" />
                                    </div>
                                </div>
                            </td>
                            <td>title</td>
                            <td>price</td>
                            <td>available</td>
                            <td>
                                {/* {
                                    booking.price && !booking.paid && <Link
                                        to={`/dashboard/payment/${booking._id}`}>
                                        <button
                                            className='btn btn-primary btn-sm'
                                        >Pay</button>
                                    </Link>
                                }
                                {
                                    booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                } */}

                                <Link
                                    to={`/dashboard/payment/id`}>
                                    <button
                                        className='btn btn-primary btn-sm'
                                    >Advertise</button>
                                </Link>
                            </td>
                            <td>
                                {/* <label
                                    onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label> */}

                                <label className="btn btn-sm btn-error">Delete</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;