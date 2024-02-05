import AccountAddressModal from '@/components/account/address/AccountAddressModal';
import React from 'react';

const AccountAddressPage = () => {
    return (
        <div className='bg-white shadow rounded-lg p-4'>
            <div className='flex items-center justify-between pb-4 border-dashed border-b border-b-primary'>
                <h1 className='text-xl font-medium'>My Address</h1>
                <AccountAddressModal />
            </div>
        </div>
    );
};

export default AccountAddressPage;