import React from 'react';
import slide1 from '../../../assets/slider-img/slide1.jpg';
import slide2 from '../../../assets/slider-img/slide2.jpg';
import slide3 from '../../../assets/slider-img/slide3.jpg';

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-1/2">

                    <img src={slide1} className="w-full h-[800px]" alt='' />
                    <div className='absolute flex h-full w-full items-center justify-center'>
                        <div className='text-center'>

                            <h1 className='text-5xl font-bold text-white text-center'>Welcome to LapSell Corner</h1>

                            <p className='w-1/2 text-xl font-medium text-white mx-auto mt-5'>Buy second-hand, Laptops on LapSell Corner, the world's best online marketplace. top brands, low prices & free shipping on many items.</p>
                        </div>
                        
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-1/2">

                    <img src={slide2} className="w-full h-[800px]" alt='' />
                    <div className='absolute flex h-full w-full items-center justify-center'>
                        <div className='text-center'>

                            <h1 className='text-5xl font-bold text-white text-center'>Welcome to LapSell Corner</h1>

                            <p className='w-1/2 text-xl font-medium text-white mx-auto mt-5'>Buy second-hand, Laptops on LapSell Corner, the world's best online marketplace. top brands, low prices & free shipping on many items.</p>
                        </div>
                        
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-1/2">

                    <img src={slide3} className="w-full h-[800px]" alt='' />
                    <div className='absolute flex h-full w-full items-center justify-center'>
                        <div className='text-center'>

                            <h1 className='text-5xl font-bold text-white text-center'>Welcome to LapSell Corner</h1>

                            <p className='w-1/2 text-xl font-medium text-white mx-auto mt-5'>Buy second-hand, Laptops on LapSell Corner, the world's best online marketplace. top brands, low prices & free shipping on many items.</p>
                        </div>
                        
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>



                {/* <div id="slide2" className="carousel-item relative w-full h-1/2">
                    <img src={slide2} className="w-full  h-[700px]" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full h-1/2">
                    <img src={slide3} className="w-full  h-[700px]" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Slider;