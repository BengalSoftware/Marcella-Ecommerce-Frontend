import SellerSettingForm from '@/components/form/seller/SellerSettingForm';
import React from 'react';

const SellerSettingsPage = () => {
    return (
        <div className='bg-white shadow rounded-lg p-4'>
            <h1 className='text-xl font-medium pb-4 border-dashed border-b border-b-primary'>Settings</h1>

            <SellerSettingForm />
        </div>
    );
};

export default SellerSettingsPage;