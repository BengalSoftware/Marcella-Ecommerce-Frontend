import Image from 'next/image';
import React from 'react';
import cover from '../../../public/assets/cover.webp'
import avatar from '../../../public/assets/sellerlogo.jpg'

const ShopHeader = ({ sellerInfo }) => {
    const { name } = sellerInfo?.data || {};
    
    return (
        <div className='relative'>
            <Image className='w-full h-36 rounded-lg' src={cover} alt='banner' quality={100} placeholder='blur' />
            <div className='bg-[#ffffffc7] absolute top-5 left-5 bottom-5 rounded-lg p-2 flex items-center gap-5'>
                <Image className='rounded-full h-16 md:h-20 w-16 md:w-20' src={avatar} alt='avatar' quality={100} placeholder='blur' />
                <div className='mr-10 md:mr-20'>
                    <h1 className='text-xl md:text-3xl font-medium'>{name}</h1>
                    <p className='mt-2 text-xs md:text-sm'>81% Positive Seller Ratings</p>
                </div>
            </div>
        </div>
    );
};

export default ShopHeader;