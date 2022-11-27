import React from 'react';
import bgImg from '../../../assets/bg-img/bgImg.jpg'

const Invitation = () => {
    return (
        <div className='my-20' style={{
            backgroundImage: `url(${bgImg})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }} >
            <div className='text-center w-1/2 mx-auto'>
                <h1 className='text-6xl text-white font-bold'>Invite a Friend <br />and take <span className='text-yellow-300'>$10</span> off </h1>
                
                <p className='text-3xl my-10 text-white font-bold'>Send a friend <span className='text-yellow-300'>15%</span> off their first purchase over <span className='text-yellow-300'> $200 </span>
                    and earn <span className='text-yellow-300'>$20</span> off your next purchase.
                </p>
                <div>
                    <input className='mb-10 px-5 py-2 rounded-md' type="email" name="email" id="" placeholder='Enter your email' />
                    <button className='btn btn-secondary ml-1'>Join Us</button>
                </div>
                <p className='text-white mb-20'>By clicking the button you agree to the <span className='text-yellow-300'>Privacy Policy</span> and <span className='text-yellow-300'>Terms and Conditions</span></p>

            </div>
        </div>
    );
};

export default Invitation;