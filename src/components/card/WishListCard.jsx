import Image from 'next/image';
import React from 'react';
import img from '../../../public/assets/product.webp'
import { MdDelete } from 'react-icons/md';

const WishListCard = () => {
    return (
        <div className='bg-white rounded-md shadow flex items-center p-1 relative'>
            <Image className='h-32 w-32' src={img} quality={100} placeholder='blur' alt='product' />
            <div>
                <p className='line-clamp-2'>Nova Automatic Cordless Stainless Steel Electric Kettle 1.8 Liter Ae-1818</p>
                <button className='text-primary uppercase text-sm mt-4'>Add To Cart</button>
            </div>
            <button className='text-2xl absolute bottom-4 right-4 text-red-500 hover:text-red-600'><MdDelete /></button>
        </div>
    );
};

export default WishListCard;