'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { districts } from '@/data/district';
import { divisions } from '@/data/division';
import { upazilas } from '@/data/upazilas';
import { createAddressMutation, updateSingleAddress } from '@/lib/addressApi/addressApi';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

const AddressForm = ({ address }) => {
    const [newAddress, setNewAddress] = useState();
    const [aLoading, setALoading] = useState(false);
    const { user } = useContext(AuthContext);
    const { setAddressSuccess, setModalOpen } = useContext(StateContext);
    const { _id, shippingName, shippingPhone, shippingEmail } = address || {};

    const handleSubmitAddress = async (e) => {
        e.preventDefault();

        try {
            setALoading(true)
            if (!address || Object.keys(address).length === 0) {
                const res = await createAddressMutation(user?.data?.user?.email, newAddress);
                if (res) {
                    toast.success('Address Create Successfull')
                    setAddressSuccess(true)
                    setModalOpen(false)
                }
            } else {
                const res = await updateSingleAddress(_id, newAddress);
                if (res) {
                    toast.success('Address Update Successfull')
                    setAddressSuccess(true)
                    setModalOpen(false)
                }
            }
        } catch (error) {
            console.error(error)
        } finally {
            setALoading(false)
        }
    }

    const handleAddressChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const updateAddress = { ...newAddress };
        updateAddress[name] = value;
        setNewAddress(updateAddress);
    }

    console.log(address)

    return (
        <form onSubmit={handleSubmitAddress}>
            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Name <span className='text-red-600'>*</span></label>
            <input onChange={handleAddressChange} defaultValue={shippingName} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Name' name='shippingName' type="text" />

            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Town / City <span className='text-red-600'>*</span></label>
            <input onChange={handleAddressChange} defaultValue={''} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Town' name='town' type="text" />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select Division <span className='text-red-600'>*</span></label>
                    <select onChange={handleAddressChange} defaultValue={address?.division} className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="division" id="">
                        {
                            divisions?.map(division =>
                                <option key={division?.id} value={division?.name}>{division?.name}</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Zip Code</label>
                    <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Zip Code' name='zipCode' type="text" />
                </div>

                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select District <span className='text-red-600'>*</span></label>
                    <select onChange={handleAddressChange} defaultValue={address?.district} className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="district" id="">
                        {
                            districts?.map(district =>
                                <option key={district?.id} value={district?.name}>{district?.name}</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Email</label>
                    <input onChange={handleAddressChange} defaultValue={shippingEmail} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Email' name='shippingEmail' type="text" />
                </div>


                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select Upazilla <span className='text-red-600'>*</span></label>
                    <select onChange={handleAddressChange} defaultValue={address?.upazila} className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="upazila" id="">
                        {
                            upazilas?.map(upzila =>
                                <option key={upzila?.id} value={upzila?.name}>{upzila?.name}</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Phone</label>
                    <input onChange={handleAddressChange} defaultValue={shippingPhone} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Phone' name='shippingPhone' type="text" />
                </div>
            </div>

            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Street Address <span className='text-red-600'>*</span></label>
            <textarea onChange={handleAddressChange} defaultValue={address?.address} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Address' name='address' type="text" />

            <div className='flex items-center justify-end'>
                {
                    address ?
                        <button className='px-6 py-2 rounded-md bg-primary hover:bg-dark text-white mt-4'>{aLoading ? 'Loading..' : 'Update'}</button> :
                        <button className='px-6 py-2 rounded-md bg-primary hover:bg-dark text-white mt-4'>{aLoading ? 'Loading..' : 'Submit'}</button>
                }
            </div>
        </form>
    );
};

export default AddressForm;