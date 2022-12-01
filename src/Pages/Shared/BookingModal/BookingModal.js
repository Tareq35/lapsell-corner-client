import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ bookingItem, setBookingItem, refetch }) => {

    const navigate = useNavigate();
    console.log(bookingItem);
    const { user } = useContext(AuthContext);
    const { product_name, resale_price, } = bookingItem;
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = Number(resale_price);
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            name,
            email,
            price,
            phone,
            location,
            paid: false,
            bookingProduct: bookingItem
        }

        fetch('https://lapsell-corner-server.vercel.app/bookingProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookingItem(null);
                    toast.success('Booking confirmed');
                    if (refetch) { refetch() };
                    navigate('/dashboard')
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setBookingItem(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product_name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />

                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />

                        <input name='price' type="text" disabled value={`$ ${resale_price}`} className="input w-full input-bordered" />

                        <input name='phone' type="number" placeholder="Phone Number" className="input w-full input-bordered" />

                        <input name='location' type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-secondary w-full input-bordered' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;