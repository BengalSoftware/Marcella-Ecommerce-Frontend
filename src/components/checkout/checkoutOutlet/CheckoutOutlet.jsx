import CheckoutCard from '@/components/card/CheckoutCard';
import React from 'react';
import { IoMdCart } from "react-icons/io";

const CheckoutOutlet = () => {
    return (
        <div>
            <button className='bg-primary w-full py-2 text-white rounded-md hover:bg-dark'>+ Add New Address</button>

            <div className='bg-white rounded-md shadow p-4 mt-5'>
                <div className='flex items-center gap-2 pb-5 border-dashed border-primary border-b'>
                    <IoMdCart className='text-primary text-2xl' />
                    <h1 className='text-xl'>Cart Products</h1>
                </div>
                <div className='mt-4'>
                    <CheckoutCard />
                    <CheckoutCard />
                    <CheckoutCard />
                </div>
            </div>
        </div>
    );
};

export default CheckoutOutlet;