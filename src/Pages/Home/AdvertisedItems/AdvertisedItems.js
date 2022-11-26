import React from 'react';
import AdvertisedItem from './AdvertisedItem';

const AdvertisedItems = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center text-4xl mb-10 font-bold'>Advertised Items</h1>
            <AdvertisedItem />
        </div>
    );
};

export default AdvertisedItems;