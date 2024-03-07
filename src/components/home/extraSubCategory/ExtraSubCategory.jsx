import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img1 from '../../../../public/assets/category/free.gif'
import { extraCatData } from '@/data/extraCatData';

const ExtraSubCategory = () => {
    return (
        <div className='bg-white shadow rounded-md md:grid grid-cols-7 p-4 hidden mb-5'>
            {
                extraCatData.map(category =>
                    <Link key={category?.id} href={`/products?category=${category?.slug}`} className='flex flex-col items-center justify-center'>
                        <Image quality={100} height={500} width={500} className='h-20 w-20 rounded-md' src={category?.image} alt={category?.name} />
                        <p className='text-xs mt-2'>{category?.name}</p>
                    </Link>
                )
            }
        </div>
    );
};

export default ExtraSubCategory;