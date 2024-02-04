import React from 'react';
import img from '../../../public/assets/product.webp'
import Image from 'next/image';


const ProductImage = () => {
    return (
        <div className='w-full'>
            <Image className='w-' quality={100} placeholder='blur' src={img} alt='detail' />

            <div className='flex items-center gap-4 w-full overflow-x-scroll seller-scrollbar'>
                <Image className='w-20 border rounded-md' quality={100} placeholder='blur' src={img} alt='detail' />
                <Image className='w-20 border rounded-md' quality={100} placeholder='blur' src={img} alt='detail' />
                <Image className='w-20 border rounded-md' quality={100} placeholder='blur' src={img} alt='detail' />
                <Image className='w-20 border rounded-md' quality={100} placeholder='blur' src={img} alt='detail' />
                <Image className='w-20 border rounded-md' quality={100} placeholder='blur' src={img} alt='detail' />
                <Image className='w-20 border rounded-md' quality={100} placeholder='blur' src={img} alt='detail' />
                <Image className='w-20 border rounded-md' quality={100} placeholder='blur' src={img} alt='detail' />
            </div>
        </div>
    );
};

export default ProductImage;