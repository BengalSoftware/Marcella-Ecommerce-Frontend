'use client'
import React, { useState } from 'react';
import ReviewRatingIndex from './reviews';
import DangerHtml from '@/utility/dangerHtml/DangerHtml';

const DetailsNavTab = ({ product }) => {
    const [navValue, setNavValue] = useState('description');
    const handleNavChange = (value) => {
        setNavValue(value)
    }

    console.log(product)
    return (
        <div className='mt-10'>
            <div className='flex items-center justify-between lg:justify-start lg:gap-10'>
                <button onClick={() => handleNavChange('description')} className={`lg:text-2xl font-medium ${navValue === 'description' ? 'text-primary pb-1 border-b-primary border-b-2' : 'text-gray-500 pb-1 border-b-white border-b-2'}`}>Description</button>
                <button onClick={() => handleNavChange('reviews')} className={`lg:text-2xl font-medium ${navValue === 'reviews' ? 'text-primary pb-1 border-b-primary border-b-2' : 'text-gray-500 pb-1 border-b-white border-b-2'}`}>Reviews</button>
                <button onClick={() => handleNavChange('terms')} className={`lg:text-2xl font-medium ${navValue === 'terms' ? 'text-primary pb-1 border-b-primary border-b-2' : 'text-gray-500 pb-1 border-b-white border-b-2'}`}>Terms & Conditions</button>
            </div>
            {
                navValue === 'description' && <div className='mt-5'>
                    <DangerHtml data={product?.description} />
                </div>
            }
            {
                navValue === 'reviews' &&
                <div className='mt-5'>
                    <ReviewRatingIndex product={product} />
                </div>
            }
            {
                navValue === 'terms' && <div className='mt-5'>
                    <DangerHtml data={product?.specification} />
                </div>
            }
        </div>
    );
};

export default DetailsNavTab;