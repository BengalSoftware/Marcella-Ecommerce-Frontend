import React from 'react';
import img from '../../../../public/assets/Trolley_Fresh_logo.png'
import Image from 'next/image';

const TopBrands = () => {
    return (
        <div className='lg:mt-16'>
            <h1 className='text-center font-semibold text-3xl'>Top Brands</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 mt-8'>
                {
                    Array(12).fill().map((_, idx) =>
                        <div key={idx} className='bg-white rounded-lg shadow-md cursor-pointer px-14 py-10 group'>
                            <Image quality={100} placeholder='blur' src={img} alt='brand' />
                            <h1 className='text-center group-hover:text-primary mt-3'>Fresh</h1>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TopBrands;