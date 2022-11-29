import React from 'react';
import Products from './Products';

const CategoryProducts = () => {
    return (
        <div>
            <section className='my-10 w-9/12 mx-auto'>
            <h1 className='text-center text-4xl mb-10 font-bold'>Advertised Items</h1>
            <Products/>
        </section>
        </div>
    );
};

export default CategoryProducts;