import CheckoutOutlet from '@/components/checkout/checkoutOutlet/CheckoutOutlet';
import OrderSummary from '@/components/checkout/orderSummary/OrderSummary';
import React from 'react';

const CartPage = () => {
    return (
        <div className='bg-secondary'>
            <div className='container mx-auto py-5'>
                <div className='mx-4 md:mx-0 grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='md:col-span-2'>
                        <CheckoutOutlet />
                    </div>
                    <div className='md:col-span-1'>
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;