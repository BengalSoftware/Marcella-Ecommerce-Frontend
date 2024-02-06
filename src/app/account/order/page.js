import OrderCard from '@/components/account/order/OrderCard';
import React from 'react';

const AccountOrderPage = () => {
    return (
        <div className='bg-white shadow rounded-lg p-4'>
            <h1 className='text-xl font-medium pb-4 border-dashed border-b border-b-primary'>My Order</h1>

            <OrderCard/>
        </div>
    );
};

export default AccountOrderPage;