import React, { useContext } from 'react';
import { MdVerifiedUser } from 'react-icons/md';
import moment from 'moment';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';

const Products = ({ product, setBookingItem, setReportItem }) => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    const {img, product_name, resale_price, original_price, use_duration, location, yearOf_purchase, condition, description, seller_name, postedAt, verify } = product;
    return (

        <div className='flex justify-center'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body p-5 gap-1">
                    <h2 className="card-title font-bold text-2xl">{product_name}</h2>
                    <p className='text-lg font-medium flex  items-center gap-2'>Seller Name: {seller_name} {verify &&
                        <span className='text-blue-600'><MdVerifiedUser /></span>}</p>
                    <p className='text-lg font-medium'>Resale Price: ${resale_price}</p>
                    <p className='text-lg font-medium'>Original Price: ${original_price}</p>
                    <p className='text-lg font-medium'>Condition: {condition}</p>
                    <p className='text-lg font-medium'>Purchase Date: {yearOf_purchase}</p>
                    <p className='text-lg font-medium'>Use Duration: {use_duration}</p>
                    <p className='text-lg font-medium'>Location: {location}</p>
                    <p className='text-lg font-medium tooltip text-left' data-tip={description}>Description: <span className='line-clamp-2 font-normal tooltip'>{description}</span>
                    </p>
                    <p className='text-lg font-medium'><span className='text-sm text-green-600'>Date of Post: {moment(postedAt).format('ll')}</span></p>

                    <div className="card-actions justify-between items-center">
                    <label
                            htmlFor="booking-modal"
                            disabled={isAdmin || isSeller }
                            className="btn btn-small btn-error "
                            onClick={() => setReportItem(product)}
                        >Report</label>

                        
                        <label
                            htmlFor="booking-modal"
                            disabled={isAdmin || isSeller }
                            className="btn btn-secondary"
                            onClick={() => setBookingItem(product)}
                        >Book Now</label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Products;