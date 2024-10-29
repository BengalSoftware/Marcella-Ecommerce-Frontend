import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({ rate }) => {
    return (
        <div className='flex items-center gap-1'>
            {
                (rate >= 0.1 && rate <= 0.9) ? <FaStarHalfAlt className={(rate >= 0.1 && rate <= 0.9) ? 'text-yellow-400' : 'text-gray-400'} /> : <FaStar className={(rate >= 1) ? 'text-yellow-400' : 'text-gray-400'} />
            }
            {
                (rate >= 1.1 && rate <= 1.9) ? <FaStarHalfAlt className={(rate >= 1.1 && rate <= 1.9) ? 'text-yellow-400' : 'text-gray-400'} /> : <FaStar className={(rate >= 2) ? 'text-yellow-400' : 'text-gray-400'} />
            }
            {
                (rate >= 2.1 && rate <= 2.9) ? <FaStarHalfAlt className={(rate >= 2.1 && rate <= 2.9) ? 'text-yellow-400' : 'text-gray-400'} /> : <FaStar className={(rate >= 3) ? 'text-yellow-400' : 'text-gray-400'} />
            }
            {
                (rate >= 3.1 && rate <= 3.9) ? <FaStarHalfAlt className={(rate >= 3.1 && rate <= 3.9) ? 'text-yellow-400' : 'text-gray-400'} /> : <FaStar className={(rate >= 4) ? 'text-yellow-400' : 'text-gray-400'} />
            }
            {
                (rate >= 4.1 && rate <= 4.9) ? <FaStarHalfAlt className={(rate >= 4.1 && rate <= 4.9) ? 'text-yellow-400' : 'text-gray-400'} /> : <FaStar className={(rate >= 5) ? 'text-yellow-400' : 'text-gray-400'} />
            }
        </div>
    );
};

export default Rating;