import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from './Products';

const CategoryProducts = () => {
    const categoryProducts = useLoaderData();
    console.log(categoryProducts);
    return (
        <div>
            <section className='my-10 w-9/12 mx-auto'>
                <h1 className='text-center text-4xl mb-10 font-bold'>Products by Category</h1>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                    {
                        categoryProducts.map((product) => <Products
                            key={product._id}
                            product={product}
                        />)
                    }

                </div>
            </section>
        </div>
    );
};

export default CategoryProducts;