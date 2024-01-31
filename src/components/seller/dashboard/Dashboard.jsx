import React from 'react';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className='text-white rounded-lg p-10 bg-primary'>
                <h1 className='text-4xl font-semibold'>0</h1>
                <h1>Products</h1>
            </div>
            <div className='text-white rounded-lg p-10 bg-red-400'>
                <h1 className='text-4xl font-semibold'>0</h1>
                <h1>Total Sell</h1>
            </div>
            <div className='text-white rounded-lg p-10 bg-purple-400'>
                <h1 className='text-4xl font-semibold'>0</h1>
                <h1>Total Order</h1>
            </div>
        </div>
    );
};

export default Dashboard;