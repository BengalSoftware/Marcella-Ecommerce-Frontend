import React from 'react';
import img from '../../../../public/assets/brand.png'
import Image from 'next/image';
import { getAllBrands } from '@/lib/categories/categoriesApi';

const TopBrands = async () => {
    const data = await getAllBrands();
    console.log(data?.result)
    return (
        <div className='lg:mt-16'>
            <h1 className='text-center font-semibold text-3xl'>Top Brands</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 mt-8'>
                {
                    data?.result?.map(brand =>
                        <div key={brand?._id} className='bg-white rounded-lg shadow-md cursor-pointer px-14 py-10 group'>
                            <Image quality={100} width={500} height={500} src={img} alt='brand' />
                            <h1 className='text-center group-hover:text-primary mt-3'>{brand?.name}</h1>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TopBrands;