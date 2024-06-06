import Rating from '@/components/rating/Rating';
import Image from 'next/image';
import React from 'react';
import { MdDelete } from 'react-icons/md';

const ReviewCard = ({ review }) => {
    return (
        <div className='border rounded-md grid grid-cols-6 lg:grid-cols-10 gap-4 items-center p-4 my-4'>
            <div className='col-span-2 lg:col-span-2'>
                <Image quality={100} height={500} width={500} className='h-20 w-20 rounded-md' src={review?.product?.images?.[0]} alt={review?.product?.altTag} />
            </div>
            <div className='col-span-4 lg:col-span-5'>
                <p className='line-clamp-2 text-sm lg:text-base'>{review?.description}</p>
            </div>
            <div className='col-span-3 lg:col-span-2 flex items-center justify-between'>
                <Rating rate={review?.rating} />
            </div>
            <div className='col-span-3 lg:col-span-1 text-end'>
                <button className='text-2xl'><MdDelete /></button>
            </div>
        </div>
    );
};

export default ReviewCard;