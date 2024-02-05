'use client'
import React, { useState } from 'react';

const AddressForm = () => {
    const [newAddress, setNewAddress] = useState();

    const handleSubmitAddress = (e) => {
        e.preventDefault();
        console.log(newAddress)
    }

    const handleAddressChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const updateAddress = { ...newAddress };
        updateAddress[name] = value;
        setNewAddress(updateAddress);
    }


    return (
        <form onSubmit={handleSubmitAddress}>
            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Name <span className='text-red-600'>*</span></label>
            <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Name' name='shippingName' type="text" />

            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Town / City <span className='text-red-600'>*</span></label>
            <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Town' name='town' type="text" />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select Division <span className='text-red-600'>*</span></label>
                    <select onChange={handleAddressChange} className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="division" id="">
                        <option value="">Select</option>
                        <option value="">Dhaka</option>
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Zip Code</label>
                    <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Zip Code' name='zipCode' type="text" />
                </div>

                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select District <span className='text-red-600'>*</span></label>
                    <select onChange={handleAddressChange} className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="district" id="">
                        <option value="">Select</option>
                        <option value="">Tangail</option>
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Email</label>
                    <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Email' name='shippingEmail' type="text" />
                </div>


                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select Upazilla <span className='text-red-600'>*</span></label>
                    <select onChange={handleAddressChange} className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="upazila" id="">
                        <option value="">Select</option>
                        <option value="">Mirzapur</option>
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Phone</label>
                    <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Phone' name='shippingPhone' type="text" />
                </div>
            </div>

            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Street Address <span className='text-red-600'>*</span></label>
            <textarea onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Address' name='address' type="text" />

            <div className='flex items-center justify-end'>
                <button className='px-6 py-2 rounded-md bg-primary hover:bg-dark text-white mt-4'>Submit</button>
            </div>
        </form>
    );
};

export default AddressForm;