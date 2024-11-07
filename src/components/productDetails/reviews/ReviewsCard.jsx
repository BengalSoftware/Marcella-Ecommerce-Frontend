import Rating from '@/components/rating/Rating';
import Image from 'next/image';
import React from 'react';

const ReviewsCard = ({ review }) => {
    return (
        <div>
            <h3>Product Review</h3>
            <div className='flex mt-4 p-2 bg-slate-50 shadow'>
                <div className='w-1/3 border-r mr-4'>
                    <p>{review?.user?.name}</p>
                    <Rating rate={review?.rating} />
                    <p className='my-2 text-xs'>{new Date(review?.createdAt).toDateString()}</p>
                </div>
                <div className='w-2/3'>
                    <p className='text-sm'>{review?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;