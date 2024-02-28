import Image from 'next/image';
import React from 'react';
import img from '../../../../public/assets/product.webp'

const OrderSingelCard = ({ product, customStatus }) => {
    const { name, images, altTag } = product?.product || {};
    console.log(product)
    return (
        <div className='border rounded-md grid grid-cols-6 lg:grid-cols-10 gap-4 items-center p-4 my-4'>
            <div className='col-span-2 lg:col-span-2'>
                <Image quality={100} width={500} height={500} className='h-20 w-20 rounded-md' src={images?.[0]} alt={altTag} />
            </div>
            <div className='col-span-4 lg:col-span-5'>
                <p className='line-clamp-2 text-sm lg:text-base'>{name}</p>
            </div>
            <div className='col-span-3 lg:col-span-2 flex items-center justify-center'>
                <h1>Qty: {product?.quantity}</h1>
            </div>
            <div className='col-span-3 lg:col-span-1 text-end'>
                {
                    customStatus ?
                        <p className='text-xs px-4 py-1 border w-fit border-dotted border-primary rounded-full mt-2'>{customStatus}</p> : null
                }
            </div>
        </div>
    );
};

export default OrderSingelCard;