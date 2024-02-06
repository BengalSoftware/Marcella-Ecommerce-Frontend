'use client'
import { Modal } from 'antd';
import React, { useState } from 'react';
import OrderProgressBar from './OrderProgressBar';
import OrderSingelCard from './OrderSingelCard';

const OrderDetailsModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setModalOpen(true)} className='text-primary font-medium'>Details</button>
            <Modal
                title="Order Details"
                centered
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                footer={false}
            >
                <div>
                    <h1 className='text-primary font-medium'>Order Id: #4449974654</h1>
                    <p className='text-sm'>Date: 01, Feb, 2024</p>
                    <h1>Total: 1400</h1>
                </div>
                <OrderProgressBar />
                <OrderSingelCard customStatus={false} />

                <div className='mt-10'>
                    <div className='flex items-center justify-between py-1'>
                        <p>Sub Total</p>
                        <p><span>৳</span> 1200</p>
                    </div>
                    <div className='flex items-center justify-between py-1 border-b'>
                        <p>Delivery Fee</p>
                        <p><span>৳</span> 60</p>
                    </div>

                    <div className='flex items-center justify-between py-1'>
                        <p>Total</p>
                        <p><span>৳</span> 1260</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default OrderDetailsModal;