import React from 'react';

const BookingModal = () => {
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Product Name</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={Price} className="input w-full input-bordered" />
                        
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        
                        <input name='phone' type="number" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
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