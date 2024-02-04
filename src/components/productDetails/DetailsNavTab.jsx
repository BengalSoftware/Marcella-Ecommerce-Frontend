'use client'
import React, { useState } from 'react';
import ReviewRatingIndex from './reviews';

const DetailsNavTab = () => {
    const [navValue, setNavValue] = useState('description');
    const handleNavChange = (value) => {
        setNavValue(value)
    }
    return (
        <div className='mt-10'>
            <div className='flex items-center gap-10'>
                <button onClick={() => handleNavChange('description')} className={`text-2xl font-medium ${navValue === 'description' ? 'text-primary pb-1 border-b-primary border-b-2' : 'text-gray-500 pb-1 border-b-white border-b-2'}`}>Description</button>
                <button onClick={() => handleNavChange('reviews')} className={`text-2xl font-medium ${navValue === 'reviews' ? 'text-primary pb-1 border-b-primary border-b-2' : 'text-gray-500 pb-1 border-b-white border-b-2'}`}>Reviews</button>
                <button onClick={() => handleNavChange('terms')} className={`text-2xl font-medium ${navValue === 'terms' ? 'text-primary pb-1 border-b-primary border-b-2' : 'text-gray-500 pb-1 border-b-white border-b-2'}`}>Terms & Conditions</button>
            </div>
            {
                navValue === 'description' && <div className='mt-5'><p>Description</p></div>
            }
            {
                navValue === 'reviews' &&
                <div className='mt-5'>
                    <ReviewRatingIndex />
                </div>
            }
            {
                navValue === 'terms' && <div className='mt-5'><p>Terms & Condition</p></div>
            }
        </div>
    );
};

export default DetailsNavTab;