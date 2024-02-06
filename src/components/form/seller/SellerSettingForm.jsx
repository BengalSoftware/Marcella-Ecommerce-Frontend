import React from 'react';

const SellerSettingForm = () => {
    return (
        <div className='mt-5'>
            <form>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <label className='text-dark text-sm'>Name <span className='text-red-500'>*</span></label>
                        <input type="text" required defaultValue={'Bengal Shop'} className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Name' />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Email <span className='text-red-500'>*</span></label>
                        <input type="email" required defaultValue={'bengal@gmail.com'} disabled className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Email' />
                    </div>
                </div>

                <div className='flex items-center justify-end mt-5'>
                    <button className='bg-primary hover:bg-dark text-white px-6 py-2 rounded-md'>Save Change</button>
                </div>
            </form>
        </div>
    );
};

export default SellerSettingForm;