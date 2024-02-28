import React from 'react';


const OrderProgressBar = ({status}) => {
    
    return (
        <div className='mt-5'>
            <div className='relative w-4/5 mx-auto'>
                <div className='flex items-center w-full rounded-full'>
                    <p className={`w-1/3 p-0.5 rounded-l-full ${(status === 'pending' || status === 'processing' || status === 'shipped' || status === 'delivered') ? 'bg-green-700' : 'bg-gray-200'}`}></p>
                    <p className={`w-1/3 p-0.5 ${(status === 'processing' || status === 'shipped' || status === 'delivered') ? 'bg-green-700' : 'bg-gray-200'}`}></p>
                    <p className={`w-1/3 p-0.5 rounded-r-full ${(status === 'shipped' || status === 'delivered') ? 'bg-green-700' : 'bg-gray-200'}`}></p>
                </div>
                <div className='flex items-center justify-between absolute w-full -top-1.5'>
                    <p className={`p-2 rounded-full ${(status === 'pending' || status === 'processing' || status === 'shipped' || status === 'delivered') ? 'bg-green-700' : 'bg-gray-200'}`}></p>
                    <p className={`p-2 rounded-full ${(status === 'processing' || status === 'shipped' || status === 'delivered') ? 'bg-green-700' : 'bg-gray-200'}`}></p>
                    <p className={`p-2 rounded-full ${(status === 'shipped' || status === 'delivered') ? 'bg-green-700' : 'bg-gray-200'}`}></p>
                    <p className={`p-2 rounded-full ${status === 'delivered' ? 'bg-green-700' : 'bg-gray-200'}`}></p>
                </div>
            </div>
            <div className='flex items-center justify-between w-[88%] mx-auto mt-4'>
                <p>Pending</p>
                <p>Processing</p>
                <p>Shipped</p>
                <p>Delivered</p>
            </div>
        </div>
    );
};

export default OrderProgressBar;