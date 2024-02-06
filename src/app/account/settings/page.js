import UserSettingForm from '@/components/form/account/UserSettingForm';
import React from 'react';

const AccountSettingsPage = () => {
    return (
        <div className='bg-white shadow rounded-lg p-4'>
            <h1 className='text-xl font-medium pb-4 border-dashed border-b border-b-primary'>Settings</h1>

            <UserSettingForm />
        </div>
    );
};

export default AccountSettingsPage;