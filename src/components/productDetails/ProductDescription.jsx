'use client'
import React, { useState } from 'react';
import { MdDiscount } from "react-icons/md";
import Rating from '../rating/Rating';
import { FiMinus, FiPlus } from "react-icons/fi";
import toast from 'react-hot-toast';
import WishlistButtonAndShare from './WishlistButtonAndShare';


const ProductDescription = ({ product }) => {
    const [productQty, setProductQty] = useState(1);
    console.log(product)
    const { name, categories, numReviews, totalRating, quantity, price, offerPrice, color, size } = product || {};

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
            <h1 className='text-lg lg:text-xl font-medium text-dark'>{name}</h1>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='mt-2 text-sm lg:text-base'>Brand: No Brands</p>
                    {
                        categories?.map(category =>
                            <p key={category?._id} className='mt-2 text-sm lg:text-base'>Category: {category?.name}</p>
                        )
                    }
                </div>
                <WishlistButtonAndShare />
            </div>
            <div className='flex items-end justify-between mt-5'>
                <span>
                    <p className='line-through'>BDT {offerPrice && price}</p>
                    <h1 className='text-dark font-semibold text-2xl lg:text-3xl mt-3'>BDT {offerPrice && offerPrice}</h1>
                </span>
                <p className='bg-primary text-white text-xs w-fit rounded-full px-2 py-0.5 flex items-center gap-1'><MdDiscount /> -BDT {price - offerPrice}</p>
            </div>
            <div className='flex items-center justify-between mt-3'>
                <Rating rate={totalRating} />
                <p className='text-xs'>{numReviews} reviews</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p>Color: </p>
                {
                    color?.map(col =>
                        <button key={col?._id} className='h-5 w-5 rounded-full' style={{ backgroundColor: col?._id?.colorCode }}></button>
                    )
                }
            </div>

            <div className='flex items-center gap-2 mt-4'>
                <p>Size: </p>
                {
                    size?.map(sz =>
                        <button key={sz?._id} className='rounded-full text-sm text-dark'>{sz?.name}</button>
                    )
                }
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
                <p className='text-sm font-light'>Stock: {quantity}</p>
            </div>
        </div>
    );
};

export default ProductDescription;