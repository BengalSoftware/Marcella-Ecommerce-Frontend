'use client'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const chartData = Array(31).fill().map((_, idx) => (
    {
        name: idx + 1,
        Orders: idx + 65,
        Sales: idx + 100,
    }
))

const OrderSellChart = () => {
    return (
        <div className='bg-white mt-5 py-5 shadow rounded-lg'>
            <h1 className='text-2xl font-medium ml-10 text-dark mb-10'>Orders & Sales</h1>
            <div style={{ width: '100%', height: 350 }}>
                <ResponsiveContainer>
                    <LineChart
                        width={500}
                        height={350}
                        data={chartData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Orders" stroke="#ec255a" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Sales" stroke="#161853" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default OrderSellChart;