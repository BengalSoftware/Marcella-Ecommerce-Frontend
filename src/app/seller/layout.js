import SellerSidebar from '@/components/seller/sidebar/SellerSidebar';
import React from 'react';

const SellerLayout = ({ children }) => {
    return (
        <div className='bg-[#f5f5f5]'>
            <div className='container mx-auto py-5'>
                <div className='mx-4 md:mx-0'>
                    <div className='grid grid-cols-5 gap-5'>
                        <div className='md:col-span-1'>
                            <SellerSidebar />
                        </div>
                        <div className='md:col-span-4'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerLayout;