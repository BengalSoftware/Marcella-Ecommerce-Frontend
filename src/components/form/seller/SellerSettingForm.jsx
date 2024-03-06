import React from 'react';

const SellerSettingForm = () => {
    return (
        <div className='mt-5'>
            <form>
                <div className='mb-4'>
                    <label className='text-dark text-sm'>Name <span className='text-red-500'>*</span></label>
                    <input type="text" required defaultValue={'Bengal Shop'} className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Name' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5'>
                    <div className='mb-4'>
                        <label className='text-dark text-sm'>Phone <span className='text-red-500'>*</span></label>
                        <input type="text" required defaultValue={'01772781540'} className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Phone' />
                    </div>
                    <div className='mb-4'>
                        <label className='text-dark text-sm'>Email <span className='text-red-500'>*</span></label>
                        <input type="email" required defaultValue={'bengal@gmail.com'} disabled className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Email' />
                    </div>
                    <div className='mb-4'>
                        <label className='text-dark text-sm'>Profile <span className='text-red-500'>*</span></label>
                        <input type="file" required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Browse' />
                    </div>
                    <div className='mb-4'>
                        <label className='text-dark text-sm'>Cover <span className='text-red-500'>*</span></label>
                        <input type="file" required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Browse' />
                    </div>
                </div>
                <div className='mb-4'>
                    <label className='text-dark text-sm'>Meta Title <span className='text-red-500'>*</span></label>
                    <input type="text" required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Meta Title' />
                </div>
                <div className='mb-4'>
                    <label className='text-dark text-sm'>Meta Description <span className='text-red-500'>*</span></label>
                    <textarea className="border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light" id="" placeholder='Meta Description' cols="4" rows="3"></textarea>
                </div>

                <div className='flex items-center justify-end mt-5'>
                    <button className='bg-primary hover:bg-dark text-white px-6 py-2 rounded-md'>Save Change</button>
                </div>
            </form>
        </div>
    );
};

export default SellerSettingForm;