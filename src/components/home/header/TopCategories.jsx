import React from 'react';
import img from '../../../../public/assets/category.jpg'
import Image from 'next/image';

const TopCategories = () => {
    return (
        <div className='bg-white shadow rounded-md md:grid grid-cols-8 gap-8 p-4 hidden'>
            {
                Array(8).fill().map((_, idx) =>
                    <div key={idx} className='flex flex-col items-center justify-center'>
                        <Image quality={100} placeholder='blur' className='h-20 w-20 rounded-md' src={img} alt="category" />
                        <p className='text-sm mt-2'>Gadget Express</p>
                    </div>
                )
            }
        </div>
    );
};

export default TopCategories;