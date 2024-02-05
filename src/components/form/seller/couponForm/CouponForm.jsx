import React from 'react';

const CouponForm = () => {
    return (
        <div className='bg-white p-4 shadow rounded-md mt-5'>
            <form>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <label className='text-dark text-sm'>Coupon Name <span className='text-red-500'>*</span></label>
                        <input type="text" required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Coupon Name' />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Coupon Code <span className='text-red-500'>*</span></label>
                        <input type="text" required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Coupon Code' />
                    </div>


                    <div>
                        <label className='text-dark text-sm'>Discount Type</label>
                        <select name="" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                            <option value="">Select</option>
                            <option value="">Percentage</option>
                            <option value="">Fixed Amount</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Discount <span className='text-red-500'>*</span></label>
                        <input type="text" required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Discount' />
                    </div>


                    <div>
                        <label className='text-dark text-sm'>Expire Date <span className='text-red-500'>*</span></label>
                        <input type="date" required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Total Amount <span className='text-xs'>(for activate coupon)</span> <span className='text-red-500'>*</span></label>
                        <input type="text" required className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Enter Total Amount' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CouponForm;