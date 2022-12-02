import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://lapsell-corner-server.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })
    const { data: seller } = useQuery({
        queryKey: ['categories', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://lapsell-corner-server.vercel.app/users/seller/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        product_categoryId: data.category,
                        product_name: data.productName,
                        condition: data.condition,
                        resale_price: data.resalePrice,
                        original_price: data.originalPrice,
                        use_duration: data.duration,
                        location: data.location,
                        sellerEmail: user.email,
                        seller_name: user.displayName,
                        postedAt: new Date(),
                        yearOf_purchase: data.purchaseYear,
                        mobile_number: data.mobileNumber,
                        description: data.productDescription,
                        img: imgData.data.url,
                        sales_status: "available",
                        advertise: false,
                        verify: seller.verify,
                    }

                    // save product information to the database
                    fetch('https://lapsell-corner-server.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`Product ${data.productName} is added successfully`);
                            navigate('/dashboard/myProducts')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='w-96 mx-auto p-7'>
            <h2 className="text-4xl mb-5">Add Product</h2>

            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Name</span></label>
                    <input type="text" className="input input-bordered input-secondary w-full max-w-xs" {...register("productName", {
                        required: "Name is Required"
                    })} />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Resale Price</span></label>
                    <input type="number" className="input input-bordered input-secondary w-full max-w-xs" {...register("resalePrice", {
                        required: true
                    })} />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Original Price</span></label>
                    <input type="number" className="input input-bordered input-secondary w-full max-w-xs" {...register("originalPrice", {
                        required: true
                    })} />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Category</span></label>
                    <select {...register('category', {
                        required: true
                    })} className="select input-bordered select-secondary w-full max-w-xs">
                        {
                            categories.map(category => <option
                                key={category._id}
                                value={category._id}
                            >{category.product_category}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Condition</span></label>
                    <select {...register('condition', {
                        required: true
                    })} className="select input-bordered select-secondary w-full max-w-xs">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Purchase Year</span></label>
                    <input type="number" className="input input-bordered input-secondary w-full max-w-xs" {...register('purchaseYear', {
                        required: true
                    })} />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Use Duration (In month)</span></label>
                    <input type="number" className="input input-bordered input-secondary w-full max-w-xs" {...register('duration', {
                        required: true
                    })} />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Sellers Name</span></label>
                    <input type="text" value={user.displayName} readOnly className="input input-bordered input-secondary w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Mobile Number</span></label>
                    <input type="number" className="input input-bordered input-secondary w-full max-w-xs" {...register('mobileNumber', {
                        required: true
                    })} />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Location</span></label>
                    <input type="text" className="input input-bordered input-secondary w-full max-w-xs" {...register('location', {
                        required: true
                    })} />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Description</span></label>
                    <textarea className="textarea textarea-secondary" placeholder="Description" {...register('productDescription', {
                        required: true
                    })} />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Image</span></label>
                    <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" {...register("image", {
                        required: "Photo is Required"
                    })} />
                </div>
                <input className='btn btn-secondary w-full mt-6' value="Add Product" type="submit" />


            </form>
        </div>
    );
};

export default AddProduct;