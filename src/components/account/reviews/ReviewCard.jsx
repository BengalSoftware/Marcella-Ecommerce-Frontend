import Rating from '@/components/rating/Rating';
import Image from 'next/image';
import React from 'react';
import img from '../../../../public/assets/product.webp'
import { MdDelete } from 'react-icons/md';

const ReviewCard = () => {
    return (
        <div className='border rounded-md grid grid-cols-6 lg:grid-cols-10 gap-4 items-center p-4 my-4'>
            <div className='col-span-2 lg:col-span-2'>
                <Image quality={100} placeholder='blur' className='h-20 w-20 rounded-md' src={img} alt="" />
            </div>
            <div className='col-span-4 lg:col-span-5'>
                <p className='line-clamp-2 text-sm lg:text-base'>Nova Automatic Cordless Stainless Steel Electric Kettle 1.8 Liter</p>
            </div>
            <div className='col-span-3 lg:col-span-2 flex items-center justify-between'>
                <Rating rate={3.5} />
            </div>
            <div className='col-span-3 lg:col-span-1 text-end'>
                <button className='text-2xl'><MdDelete /></button>
            </div>
        </div>
    );
};

export default ReviewCard;