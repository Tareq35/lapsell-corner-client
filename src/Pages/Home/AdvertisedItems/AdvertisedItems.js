import React, { useEffect, useState } from 'react';
import AdvertisedItem from './AdvertisedItem';

const AdvertisedItems = () => {
    const [advertisedItems, setAdvertisedItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/advertisedProducts')
            .then(res => res.json())
            .then(data => setAdvertisedItems(data))
    }, [])
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
                            />)
                        }

                    </div>
                </section>}
        </>
    );
};

export default AdvertisedItems;