import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `https://lapsell-corner-server.vercel.app/bookingProducts/${user?.email}`;

    const { data: myOrders = [] } = useQuery({

        queryKey: ['bookingProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    console.log(myOrders)
    return (
        <div className='my-7'>
            <h2 className='text-3xl text-center font-semibold mb-5'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders &&
                            myOrders?.map((order, i) => <tr key={order._id} className="hover">
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={order.bookingProduct.img} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{order.bookingProduct.product_name}</td>
                                <td>$ {order.price}</td>

                                <td>
                                    {
                                        order.price && !order.paid && <Link
                                            to={`/dashboard/payment/${order._id}`}>
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        order.price && order.paid && <span className='text-green-500'>Paid</span>
                                    }

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;