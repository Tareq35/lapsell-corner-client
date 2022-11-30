import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import BookingModal from '../Shared/BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';
import ReportModal from '../Shared/ReportModal/ReportModal';
import Products from './Products';

const CategoryProducts = () => {
    const categoryProducts = useLoaderData();
    const { loading } = useContext(AuthContext);

    const [bookingItem, setBookingItem] = useState(null);
    const [reportItem, setReportItem] = useState(null);


    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <section className='my-10 w-9/12 mx-auto'>
                <h1 className='text-center text-4xl mb-10 font-bold'>Products by Category</h1>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                    {
                        categoryProducts.map((product) => <Products
                            key={product._id}
                            product={product}
                            setBookingItem={setBookingItem}
                            setReportItem={setReportItem}
                        />)
                    }

                </div>
                {
                    bookingItem &&
                    <BookingModal
                        bookingItem={bookingItem}
                        setBookingItem={setBookingItem}
                    ></BookingModal>
                }
                {
                    reportItem &&
                    <ReportModal
                        reportItem={reportItem}
                        setReportItem={setReportItem}
                    ></ReportModal>
                }
            </section>
        </div>
    );
};

export default CategoryProducts;