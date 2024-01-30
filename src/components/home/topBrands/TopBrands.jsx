import React from 'react';
import img from '../../../../public/assets/Trolley_Fresh_logo.png'
import Image from 'next/image';

const TopBrands = () => {
    return (
        <div>
            <h1 className='text-center font-semibold text-3xl'>Top Brands</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4'>
                {
                    Array(12).fill().map((_, idx) =>
                        <div key={idx} className='bg-white rounded-lg shadow p-5'>
                            <Image quality={100} placeholder='blur' src={img} alt='brand' />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TopBrands;