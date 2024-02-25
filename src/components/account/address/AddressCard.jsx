'use client'
import AddressForm from '@/components/form/account/AddressForm';
import { Modal } from 'antd';
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AddressCard = ({ adrs }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [editAddress, setEditAddress] = useState({});
    const { _id, shippingName, shippingPhone, address } = adrs || {};

    const handleActiveAddress = (id) => {

    }

    const handleDeleteAddress = async (Id) => {

    }


    const handleEditAddress = (adrs) => {
        setModalOpen(true);
        setEditAddress(adrs)
    }
    return (
        <div className={`bg-white p-4 rounded hover:shadow-md cursor-pointer border text-gray-600 mb-10 ${'adrs?.selected' && 'border-green-600'}`}>
            <div className='flex justify-between items-center'>
                <p className='text-sm font-[500]'>{shippingName}</p>
                <div className='flex justify-between items-center'>
                    {
                        'adrs?.selected' ? <span className='flex items-center mr-2'>
                            <p className='mr-1 text-green-600 uppercase font-semibold text-sm'>Selected</p>
                            <FaCheckCircle className='text-green-600 text-sm'></FaCheckCircle>
                        </span> :
                            <button onClick={() => handleActiveAddress(_id)} className='text-gray-500 uppercase font-semibold tracking-widest hover:bg-green-600 hover:text-white text-sm border p-1 rounded-md mr-3'>Select</button>
                    }
                    <div>
                        <button onClick={() => handleEditAddress('adrs')} className='text-blue-500 text-sm'>Edit</button>
                        <Modal
                            title="Edit Address"
                            centered
                            open={modalOpen}
                            onCancel={() => setModalOpen(false)}
                            footer={false}
                        >
                            <AddressForm />
                        </Modal>
                    </div>
                </div>
            </div>
            <p className='text-sm my-2'>{shippingPhone}</p>
            <span className='flex justify-between items-center'>
                <p className='text-sm'>House No: {address}</p>
                {
                    '!adrs?.selected' &&
                    <button onClick={() => handleDeleteAddress(_id)} className='border p-1 rounded-md text-sm font-semibold hover:bg-red-600 hover:text-white'>Remove</button>
                }
            </span>
        </div>
    );
};

export default AddressCard;