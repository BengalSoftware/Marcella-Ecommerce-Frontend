'use client'
import React, { useState } from 'react';
import { Drawer } from 'antd';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { HiXMark } from "react-icons/hi2";
import CheckoutCard from '../card/CheckoutCard';
import Link from 'next/link';

const CartDrawer = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <button onClick={showDrawer} className='bg-white rounded-full p-1.5 relative'>
                <RiShoppingBag3Line className='text-xl font-light' />
                <p className='absolute -top-1 -right-1 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px] p-0.5 border border-white'>10</p>
            </button>
            <Drawer
                title="Shopping Cart"
                width={500}
                onClose={onClose}
                open={open}
                closeIcon={null}
                extra={
                    <button onClick={onClose} className='text-2xl border border-white hover:border-dark'>
                        <HiXMark />
                    </button>
                }
                footer={
                    <div className='flex items-center justify-between gap-2 my-10'>
                        <Link onClick={onClose} href='/checkout' className='bg-primary w-full py-2 text-white text-center hover:text-white rounded-md hover:bg-dark'>Checkout</Link>
                        <Link onClick={onClose} href='/' className='bg-dark w-full py-2 text-white rounded-md text-center hover:text-white hover:bg-primary'>Continue Shopping</Link>
                    </div>
                }
            >
                <div className='mx-4'>
                    <CheckoutCard statusCard={true} />
                    <CheckoutCard statusCard={true} />
                    <CheckoutCard statusCard={true} />
                    <CheckoutCard statusCard={true} />
                    <CheckoutCard statusCard={true} />
                    <CheckoutCard statusCard={true} />
                    <CheckoutCard statusCard={true} />
                    <CheckoutCard statusCard={true} />
                </div>
            </Drawer>
        </div>
    );
};

export default CartDrawer;