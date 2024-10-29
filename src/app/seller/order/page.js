import OrderFilter from '@/components/seller/order/OrderFilter';
import OrderListTable from '@/components/seller/order/OrderListTable';
import React from 'react';

const SellerOrderPage = () => {
    return (
        <div>
            <OrderFilter />
            <OrderListTable />
        </div>
    );
};

export default SellerOrderPage;