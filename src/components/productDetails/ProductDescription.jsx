import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdDiscount } from "react-icons/md";

const ProductDescription = () => {
    return (
        <div>
            <h1 className='text-xl font-medium text-dark'>Nova Automatic Cordless Stainless Steel Electric Kettle 1.8 Liter Ae-1818</h1>
            <p className='mt-5'>Category: Home Appliance</p>
            <div className='flex items-end justify-between mt-5'>
                <span>
                    <p className='line-through'>BDT 450</p>
                    <h1 className='text-dark font-semibold text-3xl mt-3'>BDT 220</h1>
                </span>
                <p className='bg-primary text-white text-xs w-fit rounded-full px-2 py-0.5 flex items-center gap-1'><MdDiscount /> -BDT 230</p>
            </div>
            <div className='flex items-center justify-between mt-3'>
                <span className='flex items-center text-yellow-400 gap-1'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </span>
                <p className='text-xs'>0 reviews</p>
            </div>

            <div className='flex items-center gap-x-20 mt-10'>
                <button className='bg-primary text-white px-16 py-3 rounded-md hover:bg-dark ease-in-out duration-500'>Add to Cart</button>
                <p className='text-sm font-light'>Stock: 10</p>
            </div>
        </div>
    );
};

export default ProductDescription;