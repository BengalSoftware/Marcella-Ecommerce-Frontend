import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const ProductCard = ({ imgs, product }) => {
    const { name, images, price, offerPrice } = product || {};
    return (
        <Link href={`/product/Nova Automatic Cordless Stainless Steel Electric Kettle 1.8 Liter Ae-1818`}>
            <div className='bg-white rounded-lg cursor-pointer relative shadow'>
                <p className='bg-g-primary absolute text-white top-0 left-0 rounded-tl-lg rounded-br-lg text-xs md:text-sm px-4 py-2 z-50'>Flat {price - offerPrice} TK off</p>
                <div className='overflow-hidden rounded-t-lg'>
                    <Image width={800} height={800} quality={100} className='rounded-t-lg hover:scale-110 ease-in-out duration-700 h-52' src={images?.[0] ? images?.[0] : imgs} alt="" />
                </div>
                <div className='p-2'>
                    <p className='line-clamp-2 min-h-[3rem] text-sm lg:text-base text-center'>{name}</p>
                    <p className='text-center mt-2 font-medium text-primary'>BDT {offerPrice ? offerPrice : price}</p>
                    <p className='text-center mt-2 rounded-full border w-fit mx-auto text-sm px-3 py-1 font-medium'>MRP <span className='line-through text-red-500'>{price}</span></p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;