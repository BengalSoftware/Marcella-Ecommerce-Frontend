'use client'
import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { IoEye } from 'react-icons/io5';
import SellerOrderDetails from './SellerOrderDetails';
import { getSingleOrderById } from '@/lib/orderApi/orderApi';

const OrderViewModal = ({ id, sellerInfo }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [singleOrder, setSingelOrder] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSingleOrderById(id);
                if (res) {
                    setSingelOrder(res)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [id])


    return (
        <div>
            <button onClick={() => setModalOpen(true)} className='bg-green-500 rounded hover:bg-green-600 text-white text-xl px-3 py-1'><IoEye /></button>
            <Modal
                title="Order Details"
                centered
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                footer={false}
                width={1200}
            >
                <SellerOrderDetails
                    sellerInfo={sellerInfo}
                    singleOrder={singleOrder} />
            </Modal>
        </div>
    );
};

export default OrderViewModal;