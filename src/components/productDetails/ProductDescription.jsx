'use client'
import React, { useState } from 'react';
import { MdDiscount } from "react-icons/md";
import Rating from '../rating/Rating';
import { FiMinus, FiPlus } from "react-icons/fi";
import toast from 'react-hot-toast';
import WishlistButtonAndShare from './WishlistButtonAndShare';


const ProductDescription = () => {
    const [productQty, setProductQty] = useState(1);

    const handleQtyIncrement = () => {
        const newQty = productQty + 1;
        if (productQty >= 5) {
            toast.error('Already chosen five products');
        } else {
            setProductQty(newQty);
        }
    }

    const handleQtyDecrement = () => {
        const newQty = productQty - 1;
        if (productQty <= 1) {
            toast.error('Select a minimum of one product');
        } else {
            setProductQty(newQty);
        }
    }

    return (
        <div>
            <h1 className='text-lg lg:text-xl font-medium text-dark'>Nova Automatic Cordless Stainless Steel Electric Kettle 1.8 Liter Ae-1818</h1>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='mt-2 text-sm lg:text-base'>Brand: No Brands</p>
                    <p className='mt-2 text-sm lg:text-base'>Category: Home Appliance</p>
                </div>
                <WishlistButtonAndShare />
            </div>
            <div className='flex items-end justify-between mt-5'>
                <span>
                    <p className='line-through'>BDT 450</p>
                    <h1 className='text-dark font-semibold text-2xl lg:text-3xl mt-3'>BDT 220</h1>
                </span>
                <p className='bg-primary text-white text-xs w-fit rounded-full px-2 py-0.5 flex items-center gap-1'><MdDiscount /> -BDT 230</p>
            </div>
            <div className='flex items-center justify-between mt-3'>
                <Rating rate={3.5} />
                <p className='text-xs'>0 reviews</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p>Color: </p>
                <button className='h-5 w-5 rounded-full bg-red-500'></button>
                <button className='h-5 w-5 rounded-full bg-black'></button>
                <button className='h-5 w-5 rounded-full bg-blue-500'></button>
                <button className='h-5 w-5 rounded-full bg-yellow-500'></button>
                <button className='h-5 w-5 rounded-full bg-purple-500'></button>
            </div>

            <div className='flex items-center gap-2 mt-4'>
                <p>Size: </p>
                <button className='rounded-full text-sm text-dark'>S</button>
                <button className='rounded-full text-sm text-dark'>M</button>
                <button className='rounded-full text-sm text-dark'>XL</button>
                <button className='rounded-full text-sm text-dark'>XXL</button>
                <button className='rounded-full text-sm text-dark'>XXXL</button>
            </div>

            <div className='mt-4 flex items-center gap-5'>
                <p className='text-dark'>Quantity</p>
                <div className='flex items-center border w-fit rounded-md'>
                    <button onClick={handleQtyDecrement} className='border-r text-2xl bg-white rounded-l-md p-1'>
                        <FiMinus />
                    </button>
                    <p className='w-16 text-center'>{productQty}</p>
                    <button onClick={handleQtyIncrement} className='border-l text-2xl bg-white rounded-r-md p-1'>
                        <FiPlus />
                    </button>
                </div>
            </div>

            <div className='flex items-center gap-x-20 mt-4'>
                <button className='bg-primary text-white px-10 lg:px-16 py-2 lg:py-3 rounded-md hover:bg-dark ease-in-out duration-500'>Add to Cart</button>
                <p className='text-sm font-light'>Stock: 10</p>
            </div>
        </div>
    );
};

export default ProductDescription;