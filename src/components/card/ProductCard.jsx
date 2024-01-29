import Image from 'next/image';
import React from 'react';

const ProductCard = () => {
    return (
        <div className='bg-white rounded-lg cursor-pointer relative'>
            <p className='bg-g-primary absolute text-white top-0 left-0 rounded-tl-lg rounded-br-lg text-sm px-4 py-2 z-50'>Flat 10 TK off</p>
            <div className='overflow-hidden rounded-t-lg'>
                <Image quality={100} placeholder='blur' className='rounded-t-lg hover:scale-110 ease-in-out duration-700' src="https://qcoom.com/_next/image?url=https%3A%2F%2Fproduction-qcoom-user.s3-ap-southeast-1.amazonaws.com%2Fstatic_image%2F2023-11-04T14%3A42%3A07.513_3.jpg&w=1920&q=50" alt="" />
            </div>
            <div className='p-2'>
                <p className='line-clamp-2 text-center'>Nova Automatic Cordless Stainless Steel Electric Kettle 1.8 Liter Ae-1818</p>
                <p className='text-center mt-2 font-medium text-primary'>BDT 680.00</p>
                <p className='text-center mt-2 rounded-full border w-fit mx-auto text-sm px-3 py-1 font-medium'>MRP <span className='line-through text-red-500'>1350</span></p>
            </div>
        </div>
    );
};

export default ProductCard;