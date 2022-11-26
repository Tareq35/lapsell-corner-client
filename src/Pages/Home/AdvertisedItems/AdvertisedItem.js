import React from 'react';

const AdvertisedItem = () => {
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>Resale Price:</p>
                    <p>Original Price:</p>
                    <p>Condition:</p>
                    <p>Purchase Date:</p>
                    <p>Use Duration:</p>
                    <p>Seller Name:</p>
                    <p>Location:</p>
                    <p>Description:</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary">Book now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItem;