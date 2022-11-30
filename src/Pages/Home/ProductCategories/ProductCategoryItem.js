import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategoryItem = ({ productCategory }) => {
    const { product_category, brandImg, _id } = productCategory;
    return (

        <div className="max-w-sm mx-auto rounded-lg border">
            <Link to={`/categoryProducts/${_id}`} className="" rel="">
                <div className="rounded-lg shadow-lg bg-white">
                    <div className="overflow-hidden">
                        <img
                            className="rounded-t-lg transition duration-300 h-[286.5px] transform hover:scale-110"
                            src={brandImg}
                            alt=""
                        />
                    </div>
                    <div className="p-5 bg-blue-200 rounded-b-lg">
                        <h5 className="text-gray-900 text-xl font-medium mb-2 line-clamp-2">
                            {product_category}
                        </h5>
                    </div>
                </div>
            </Link>
        </div>



    );
};

export default ProductCategoryItem;