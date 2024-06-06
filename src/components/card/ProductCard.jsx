import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ imgs, product }) => {
    const { name, images, price, offerPrice, slug } = product || {};
    
    return (
        <div className='relative group'>
            <Link href={`/product/${slug}`}>
                <div className='bg-white rounded-lg cursor-pointer relative shadow'>
                   
                    <div className='overflow-hidden rounded-t-lg'>
                        <Image width={800} height={800} quality={100} className='rounded-t-lg hover:scale-110 ease-in-out duration-700 h-40 lg:h-48' src={images?.[0] ? images?.[0] : imgs} alt="" />
                    </div>
                    <div className='p-2'>
                        <p className='line-clamp-2 h-4 2xl:min-h-[3rem] text-xs lg:text-sm 2xl:text-base text-center'>{name}</p>
                        <p className='text-center mt-2 font-medium text-primary'>BDT {offerPrice ? offerPrice : price}</p>
                        <p className='text-center mt-2 rounded-full border w-fit mx-auto text-sm px-3 py-1 font-medium'>MRP <span className='line-through text-red-500'>{price}</span></p>
                    </div>
                </div>
            </Link>
            <AddToCartButton product={product} />
        </div>
    );
};

export default ProductCard;