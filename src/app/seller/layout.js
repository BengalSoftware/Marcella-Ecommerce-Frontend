'use client'
import SellerSidebar from '@/components/seller/sidebar/SellerSidebar';
import React from 'react';

const SellerLayout = ({ children }) => {
    return (
        <div className='bg-secondary h-[85vh]'>
            <div className='container mx-auto py-5'>
                <div className='mx-4 md:mx-0'>
                    <div className='grid grid-cols-5 gap-5'>
                        <div className='md:col-span-1'>
                            <SellerSidebar />
                        </div>
                        <div className='md:col-span-4 overflow-y-scroll h-[80vh] seller-scrollbar'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerLayout;