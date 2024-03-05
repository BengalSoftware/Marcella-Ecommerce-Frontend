import Rating from '@/components/rating/Rating';
import RatingProgress from '@/components/rating/RatingProgress';
import React from 'react';

const RatingReviews = ({ product }) => {
    const { numReviews, totalRating, averageRating } = product || {};

    return (
        <div className='bg-white rounded-md'>
            <p className='text-sm bg-gray-100 p-2 rounded-md'>Rating & Reviews</p>
            <div className='lg:flex gap-x-40 px-2 py-4'>
                <div>
                    <div className='flex items-center gap-4 mb-4'>
                        <h1 className='text-3xl'>{averageRating?.$numberDecimal}</h1>
                        <p className='bg-primary text-white text-xs w-fit px-4 py-2 rounded-full'>Very Good</p>
                    </div>
                    <Rating rate={averageRating?.$numberDecimal} />
                    <p className='text-xs xl:text-sm text-dark mt-2'>{numReviews} ratings</p>
                </div>

                <div className='mt-5 lg:mt-4'>
                    <div className="mb-2 flex items-center gap-x-10">
                        <Rating rate={5} />
                        <RatingProgress numReviews={numReviews} rating={totalRating} />
                    </div>
                    <div className="mb-2 flex items-center gap-x-10">
                        <Rating rate={4} />
                        <RatingProgress numReviews={numReviews} rating={0} />
                    </div>
                    <div className="mb-2 flex items-center gap-x-10">
                        <Rating rate={3} />
                        <RatingProgress numReviews={numReviews} rating={0} />
                    </div>
                    <div className="mb-2 flex items-center gap-x-10">
                        <Rating rate={2} />
                        <RatingProgress numReviews={numReviews} rating={0} />
                    </div>
                    <div className="mb-2 flex items-center gap-x-10">
                        <Rating rate={1} />
                        <RatingProgress numReviews={numReviews} rating={0} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatingReviews;