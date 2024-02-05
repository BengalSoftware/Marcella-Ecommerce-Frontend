'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import img from '../../../public/assets/product.webp'
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const CheckoutCard = () => {
    const [productQty, setProductQty] = useState(1);


    const handleIncrement = () => {
        const newQty = productQty + 1;
        setProductQty(newQty);
    }


    const handleDecrement = () => {
        const newQty = productQty - 1;
        setProductQty(newQty);
    }

    return (
        <div className='border rounded-md flex gap-4 items-center p-4 my-4'>
            <div className='w-1/5'>
                <Image quality={100} placeholder='blur' className='h-20 w-20 rounded-md' src={img} alt="" />
            </div>
            <p className='w-1/2 line-clamp-2 overflow-hidden p-2'>Nova Automatic Cordless Stainless Steel Electric Kettle 1.8 Liter Ae-1818</p>
            <div className='w-1/5 flex items-center justify-between border rounded-md'>
                <button onClick={handleDecrement} disabled={productQty <= 1} className={`text-xl p-2 border-r ${productQty <= 1 && 'cursor-not-allowed'}`}><FiMinus /></button>
                <p className='px-4'>{productQty}</p>
                <button onClick={handleIncrement} disabled={productQty >= 5} className={`text-xl p-2 border-l ${productQty >= 5 && 'cursor-not-allowed'}`}><FiPlus /></button>
            </div>
            <div className='w-[10%] text-end'>
                <button className='text-2xl'><MdDelete /></button>
            </div>
        </div>
    );
};

export default CheckoutCard;