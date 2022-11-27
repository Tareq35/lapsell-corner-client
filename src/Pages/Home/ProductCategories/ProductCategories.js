import React from 'react';
import ProductCategoryItem from './ProductCategoryItem';

const ProductCategories = () => {
    return (
        <section className='my-20 w-9/12 mx-auto'>
            <h1 className='text-center text-4xl mb-10 font-bold'>Product Categories</h1>

            <ProductCategoryItem />

        </section>
    );
};

export default ProductCategories;