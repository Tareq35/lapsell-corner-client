import React from 'react';
import AdvertisedItem from './AdvertisedItem';

const AdvertisedItems = () => {
    return (
        <section className='my-10 w-9/12 mx-auto'>
            <h1 className='text-center text-4xl mb-10 font-bold'>Advertised Items</h1>
            <AdvertisedItem />
        </section>
    );
};

export default AdvertisedItems;