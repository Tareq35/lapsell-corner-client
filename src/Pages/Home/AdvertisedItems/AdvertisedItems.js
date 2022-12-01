import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import Loading from '../../Shared/Loading/Loading';
import ReportModal from '../../Shared/ReportModal/ReportModal';
import AdvertisedItem from './AdvertisedItem';

const AdvertisedItems = () => {
    const [bookingItem, setBookingItem] = useState(null);
    const [reportItem, setReportItem] = useState(null);
    console.log(bookingItem)
    const { data: advertisedItems = [], refetch, isLoading } = useQuery({
        queryKey: ['advertisedProducts'],
        queryFn: async () => {
            const res = await fetch(`https://lapsell-corner-server.vercel.app/advertisedProducts`);
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            {
                advertisedItems.length > 0 &&
                <section className='my-10 w-9/12 mx-auto'>
                    <h1 className='text-center text-4xl mb-10 font-bold'>Advertised Items</h1>
                    <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                        {
                            advertisedItems.map(advertisedItem => <AdvertisedItem
                                key={advertisedItem._id}
                                advertisedItem={advertisedItem}
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
                            refetch={refetch}
                        ></BookingModal>
                    }
                    {
                        reportItem &&
                        <ReportModal
                            reportItem={reportItem}
                            setReportItem={setReportItem}

                        ></ReportModal>
                    }
                </section>}
        </>
    );
};

export default AdvertisedItems;