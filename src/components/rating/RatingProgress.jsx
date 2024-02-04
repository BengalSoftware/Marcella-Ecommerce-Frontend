import React from 'react';

const RatingProgress = ({ rating }) => {
    const totalRating = 2354;
    const percentRate = (rating / totalRating) * 100;

    return (
        <div className='w-52'>
            <div className='p-1 w-full bg-gray-400 rounded-full relative'>
                <div className={`p-1 bg-yellow-400 rounded-full absolute top-0 left-0 bottom-0`} style={{ width: `${percentRate}%` }}></div>
            </div>
        </div>
    );
};

export default RatingProgress;