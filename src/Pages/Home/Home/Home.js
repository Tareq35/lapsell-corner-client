import React from 'react';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Invitation from '../Invitation/Invitation';
import ProductCategories from '../ProductCategories/ProductCategories';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div>
            <Slider/>
            <AdvertisedItems/>
            <ProductCategories/>
            <Invitation/>
        </div>
    );
};

export default Home;