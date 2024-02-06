import React from 'react';
import img from '../../../../public/assets/product.webp'
import Image from 'next/image';


const CancellationsCard = () => {
    return (
        <div className='border rounded-md mt-4 p-2'>
            <div className='flex items-center justify-between border-dashed border-b border-b-dark pb-2'>
                <div>
                    <h1 className='text-primary font-medium'>Order Id: #4449974654</h1>
                    <p className='text-sm'>Date: 01, Feb, 2024</p>
                </div>
                <div>
                    <h1>Total: 1400</h1>
                    <button className='text-primary font-medium'>Details</button>
                </div>
            </div>


            {/* single cancel card  */}
            <div className='border rounded-md grid grid-cols-6 lg:grid-cols-10 gap-4 items-center p-4 my-4'>
                <div className='col-span-2 lg:col-span-2'>
                    <Image quality={100} placeholder='blur' className='h-20 w-20 rounded-md' src={img} alt="" />
                </div>
                <div className='col-span-4 lg:col-span-5'>
                    <p className='line-clamp-2 text-sm lg:text-base'>Nova Automatic Cordless Stainless Steel Electric Kettle 1.8 Liter</p>
                </div>
                <div className='col-span-3 lg:col-span-2 flex items-center justify-center'>
                    <h1>Qty: 1</h1>
                </div>
                <div className='col-span-3 lg:col-span-1 text-end'>
                    <p className='text-xs px-4 py-1 border w-fit border-dotted border-primary rounded-full mt-2'>pending</p>
                </div>
            </div>


            <div className='border rounded-md grid grid-cols-6 lg:grid-cols-10 gap-4 items-center p-4 my-4'>
                <div className='col-span-2 lg:col-span-2'>
                    <Image quality={100} placeholder='blur' className='h-20 w-20 rounded-md' src={img} alt="" />
                </div>
                <div className='col-span-4 lg:col-span-5'>
                    <p className='line-clamp-2 text-sm lg:text-base'>Nova Automatic Cordless Stainless Steel Electric Kettle 1.8 Liter</p>
                </div>
                <div className='col-span-3 lg:col-span-2 flex items-center justify-center'>
                    <h1>Qty: 1</h1>
                </div>
                <div className='col-span-3 lg:col-span-1 text-end'>
                    <p className='text-xs px-4 py-1 border w-fit border-dotted border-primary rounded-full mt-2'>pending</p>
                </div>
            </div>

            {/* button section  */}
            <div className='flex items-center justify-end'>
                <button className='bg-red-500 hover:bg-red-700 px-4 py-1 rounded-full text-white text-sm'>Cancel</button>
            </div>
        </div>
    );
};

export default CancellationsCard;