import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/pageNotFound/1551659700811.jpg'

const PageNotFound = () => {
    return (
        
            <div className='w-full h-[60vh]my-20'>
                <img className='mx-auto' src={image} alt="" />
                <h4 className='text-2xl text-center my-10'>Go back to <Link to="/"><span className='text-yellow-500'>Home</span></Link></h4>
            </div>

    );
};

export default PageNotFound;