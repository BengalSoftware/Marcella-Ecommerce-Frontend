import BackButton from '@/components/backButton/BackButton';
import CouponForm from '@/components/form/seller/couponForm/CouponForm';
import React from 'react';

const AddCouponPage = () => {
    return (
        <div>
            <div className='flex items-center justify-between bg-white p-4 shadow rounded-md'>
                <h1 className='text-2xl font-medium'>Add New Coupon</h1>
                <BackButton />
            </div>
            <CouponForm />
        </div>
    );
};

export default AddCouponPage;