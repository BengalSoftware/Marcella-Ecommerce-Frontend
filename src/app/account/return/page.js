import ReturnCard from '@/components/account/return/ReturnCard';
import React from 'react';

const AccountReturnPage = () => {
    return (
        <div className='bg-white shadow rounded-lg p-4'>
            <h1 className='text-xl font-medium pb-4 border-dashed border-b border-b-primary'>My Return</h1>

            <ReturnCard />
        </div>
    );
};

export default AccountReturnPage;