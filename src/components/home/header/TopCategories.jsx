import React from 'react';
import img from '../../../../public/assets/category.jpg'
import Image from 'next/image';
import Link from 'next/link';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { categoriesData } from '@/data/categoriesData';

const TopCategories = () => {
    return (
        <div className='bg-white shadow rounded-md md:grid grid-cols-10 p-4 hidden mb-5'>
            {
                categoriesData.map(category =>
                    <Link key={category?.id} href={`/products?category=${category?.slug}`} className='flex flex-col items-center justify-center'>
                        <Image quality={100} height={500} width={500} className='h-20 w-20 rounded-full' src={category?.image} alt={category?.name} />
                        <p className='text-xs mt-2'>{category?.name}</p>
                    </Link>
                )
            }
            <div className='flex flex-col items-center justify-center'>
                <Link href='/products?category' className='bg-green-100 rounded-full h-20 w-20 flex flex-col items-center justify-center text-4xl text-primary'>
                    <MdKeyboardDoubleArrowRight />
                </Link>
                <p className='text-xs mt-2'>All Categories</p>
            </div>
        </div>
    );
};

export default TopCategories;