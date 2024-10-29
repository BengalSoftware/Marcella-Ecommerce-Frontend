import Dashboard from '@/components/seller/dashboard/Dashboard';
import OrderSellChart from '@/components/seller/dashboard/OrderSellChart';
import React from 'react';

const SellerPage = () => {
    return (
        <div>
            <Dashboard />
            <OrderSellChart />
        </div>
    );
};

export default SellerPage;