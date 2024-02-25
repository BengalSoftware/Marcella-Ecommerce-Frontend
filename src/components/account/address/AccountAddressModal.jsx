'use client'
import AddressForm from '@/components/form/account/AddressForm';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { Modal } from 'antd';
import React, { useContext, useState } from 'react';

const AccountAddressModal = () => {
    const { modalOpen, setModalOpen } = useContext(StateContext)

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