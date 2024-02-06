import React from 'react';
import OrderDetailsModal from './OrderDetailsModal';
import OrderSingelCard from './OrderSingelCard';

const OrderCard = () => {
    return (
        <div className='border rounded-md mt-4 p-2'>
            <div className='flex items-center justify-between border-dashed border-b border-b-dark pb-2'>
                <div>
                    <h1 className='text-primary font-medium'>Order Id: #4449974654</h1>
                    <p className='text-sm'>Date: 01, Feb, 2024</p>
                </div>
                <div>
                    <h1>Total: 1400</h1>
                    <OrderDetailsModal />
                </div>
            </div>


            {/* single order card  */}

            <OrderSingelCard customStatus={true} />

            {/* button section  */}
            <div className='flex items-center justify-end'>
                <button className='bg-red-500 hover:bg-red-700 px-4 py-1 rounded-full text-white text-sm'>Cancel</button>
            </div>
        </div>
    );
};

export default OrderCard;