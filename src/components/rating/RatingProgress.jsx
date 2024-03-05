import React from 'react';

const RatingProgress = ({ numReviews, rating }) => {
    const percentRate = (rating / numReviews) * 100;

    return (
        <div className='w-52'>
            <div className='p-1 w-full bg-gray-400 rounded-full relative'>
                <div className={`p-1 bg-yellow-400 rounded-full absolute right-0 top-0 left-0 bottom-0`} style={{ maxWidth: `${percentRate}%` }}></div>
            </div>
        </div>
    );
};

export default RatingProgress;