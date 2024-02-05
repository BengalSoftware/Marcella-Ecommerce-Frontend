'use client'
import AddressForm from '@/components/form/account/AddressForm';
import { Modal } from 'antd';
import React, { useState } from 'react';

const AccountAddressModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className='px-6 py-2 rounded-md bg-primary hover:bg-dark text-white'>+ New Address</button>
            <Modal
                title="Add New Address"
                centered
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                footer={false}
            >
                <AddressForm />
            </Modal>
        </div>
    );
};

export default AccountAddressModal;