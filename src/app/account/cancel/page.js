import CancellationsCard from '@/components/account/cancellations/CancellationsCard';
import React from 'react';

const AccountCancelPage = () => {
    return (
        <div className='bg-white shadow rounded-lg p-4'>
            <h1 className='text-xl font-medium pb-4 border-dashed border-b border-b-primary'>My Cancellations</h1>

            <CancellationsCard />
        </div>
    );
};

export default AccountCancelPage;