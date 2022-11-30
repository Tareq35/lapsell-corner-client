import React from 'react';
import { MdVerifiedUser } from 'react-icons/md';
import moment from 'moment';


const AdvertisedItem = ({ advertisedItem }) => {
    const { product_name, resale_price, original_price, use_duration, location, yearOf_purchase, condition, description, seller_name, postedAt, seller_status } = advertisedItem;

    return (

        <div className='flex justify-center'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/Jc5XdxB/hp-15s-spruce-blue-02-500x500.jpg" alt="Shoes" /></figure>
                <div className="card-body p-5 gap-1">
                    <h2 className="card-title font-bold text-2xl">{product_name}</h2>

                    <p className='text-lg font-medium flex  items-center gap-2'>Seller Name: {seller_name} {seller_status === "verified" && 
                    <span className='text-blue-600'><MdVerifiedUser /></span>}</p>

                    <p className='text-lg font-medium'>Resale Price: ${resale_price}</p>
                    <p className='text-lg font-medium'>Original Price: ${original_price}</p>
                    <p className='text-lg font-medium'>Condition: {condition}</p>
                    <p className='text-lg font-medium'>Purchase Year: {yearOf_purchase}</p>
                    <p className='text-lg font-medium'>Use Duration: {use_duration}</p>
                    <p className='text-lg font-medium'>Location: {location}</p>
                    <p className='text-lg font-medium tooltip text-left' data-tip={description}>Description: <span className='line-clamp-2 font-normal toolt'>{description}</span>
                    </p>
                    <p className='text-lg font-medium'><span className='text-sm text-green-600'>Date of Post: {moment(postedAt).format('ll')}</span></p>


                    <div className="card-actions justify-between items-center">
                        <button className="btn btn-small btn-error">report</button>
                        <button className="btn btn-secondary">Book now</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default AdvertisedItem;