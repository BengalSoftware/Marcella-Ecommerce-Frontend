import React from 'react';
import ProductCard from '../../card/ProductCard';
import Slider from 'react-slick';
import { productSettings } from '../../../utility/sliderSettings/productSettings';
import Image from 'next/image';

const FestivalComponent = () => {
    return (
        <div className='bg-white rounded-xl shadow'>
            <div className='flex items-center justify-between pr-5'>
                <div className='flex items-center p-5 gap-8'>
                    <h1 className='text-2xl font-medium text-primary'>Global</h1>
                    <span className='bg-primary text-white flex items-center gap-2 p-1 px-2 rounded-md shadow text-lg'>
                        <h1>12d:</h1>
                        <h1>11h:</h1>
                        <h1>27m:</h1>
                        <h1>14s</h1>
                    </span>
                </div>
                <button className='border border-primary hover:bg-primary hover:text-white text-primary rounded-full px-4 py-1 font-medium ease-in-out duration-500'>Show All</button>
            </div>
            <Image quality={100} placeholder='blur' className='w-full h-fit' src="https://production-qcoom-user.s3-ap-southeast-1.amazonaws.com/static_image/2023-10-17T15:49:31.190_Banner-0.gif" alt="" />

            <div className='bg-yellow-400 p-5 rounded-b-xl'>
                <Slider {...productSettings}>
                    {
                        Array(5).fill().map((_, idx) =>
                            <div key={idx} className='px-2'>
                                <ProductCard />
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

export default FestivalComponent;