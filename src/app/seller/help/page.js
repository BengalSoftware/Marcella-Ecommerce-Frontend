import BackButton from '@/components/backButton/BackButton';
import HelpForm from '@/components/seller/help/HelpForm';
import React from 'react';

const HelpPage = () => {
    return (
        <div>
            <div className='flex items-center justify-between bg-white p-4 shadow rounded-md'>
                <h1 className='text-2xl font-medium'>Help & Support</h1>
                <BackButton />
            </div>
            <HelpForm />
        </div>
    );
};

export default HelpPage;