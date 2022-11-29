import React from 'react';

const AddProduct = () => {
    return (
        <div className='w-96 mx-auto p-7'>
            <h2 className="text-4xl mb-5">Add A Product</h2>

            <form>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Name</span></label>
                    <input type="text" className="input input-bordered input-secondary w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Resale Price</span></label>
                    <input type="number" className="input input-bordered input-secondary w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Original Price</span></label>
                    <input type="number" className="input input-bordered input-secondary w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Category</span></label>
                    <select className="select input-bordered select-secondary w-full max-w-xs">
                        <option>Hp</option>
                        <option>Apple</option>
                        <option>Asus</option>
                        <option>Dell</option>
                        <option>MSI</option>
                        <option>Lenovo</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Condition</span></label>
                    <select className="select input-bordered select-secondary w-full max-w-xs">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Use Duration (In month)</span></label>
                    <input type="number" className="input input-bordered input-secondary w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Sellers Name</span></label>
                    <input type="text" className="input input-bordered input-secondary w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Mobile Number</span></label>
                    <input type="number" className="input input-bordered input-secondary w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Location</span></label>
                    <input type="text" className="input input-bordered input-secondary w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Description</span></label>
                    <textarea className="textarea textarea-secondary" placeholder="Description"></textarea>

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Image</span></label>
                    <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                </div>
                <input className='btn btn-secondary w-full mt-6' value="Add Doctor" type="submit" />


            </form>
        </div>
    );
};

export default AddProduct;