'use client'
import { Modal } from 'antd';
import React, { useState } from 'react';
import OrderProgressBar from './OrderProgressBar';
import OrderSingelCard from './OrderSingelCard';

const OrderDetailsModal = ({ orders, order }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { orderId, createdAt, totalAmount, shippingCharge, status } = order || {};
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
                    <h1 className='text-primary font-medium'>Order Id: #{orderId}</h1>
                    <p className='text-sm'>Date: {new Date(createdAt).toLocaleDateString()}</p>
                    <h1>Total: {totalAmount}</h1>
                </div>
                <OrderProgressBar status={status} />
                {
                    order?.products?.map(product =>
                        <OrderSingelCard
                            key={product?._id}
                            product={product}
                            customStatus={false} />
                    )
                }

                <div className='mt-10'>
                    <div className='flex items-center justify-between py-1'>
                        <p>Sub Total</p>
                        <p><span className='font-[auto]'>৳</span> {totalAmount - shippingCharge}</p>
                    </div>
                    <div className='flex items-center justify-between py-1 border-b'>
                        <p>Delivery Fee</p>
                        <p><span className='font-[auto]'>৳</span> {shippingCharge}</p>
                    </div>

                    <div className='flex items-center justify-between py-1'>
                        <p>Total</p>
                        <p><span className='font-[auto]'>৳</span> {totalAmount}</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default OrderDetailsModal;