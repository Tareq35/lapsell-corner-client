import React, { useEffect, useState } from 'react';
import ProductCategoryItem from './ProductCategoryItem';

const ProductCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <section className='my-20 w-9/12 mx-auto'>
            <h1 className='text-center text-4xl mb-10 font-bold'>Product Categories</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    categories.map(category => <ProductCategoryItem
                        key={category._id}
                        productCategory={category}
                    ></ProductCategoryItem>)
                }
            </div>
        </section>
    );
};

export default ProductCategories;