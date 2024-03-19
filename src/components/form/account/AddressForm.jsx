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
    const [aLoading, setALoading] = useState(false);
    const [updateDivision, setUpdateDivision] = useState(null)
    const [updateDistrict, setUpdateDistrict] = useState(null)
    const [updateUpazila, setUpdateUpazila] = useState(null)
    const { user } = useContext(AuthContext);
    const { setAddressSuccess, setModalOpen } = useContext(StateContext);
    const { _id, shippingName, shippingPhone, shippingEmail } = address || {};

    const handleSubmitAddress = async (e) => {
        e.preventDefault();
        const shippingName = e.target.shippingName.value
        const town = e.target.town.value
        const zipCode = e.target.zipCode.value
        const shippingEmail = e.target.shippingEmail.value
        const shippingPhone = e.target.shippingPhone.value
        const addrs = e.target.address.value

        const newAddress = {
            shippingName,
            town,
            zipCode,
            shippingEmail,
            shippingPhone,
            address: addrs,
            division: updateDivision?.name,
            district: updateDistrict?.name,
            upazila: updateUpazila?.name
        }
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


    return (
        <form onSubmit={handleSubmitAddress}>
            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Name <span className='text-red-600'>*</span></label>
            <input defaultValue={shippingName} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Name' name='shippingName' type="text" />

            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Town / City <span className='text-red-600'>*</span></label>
            <input defaultValue={''} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Town' name='town' type="text" />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select Division <span className='text-red-600'>*</span></label>
                    <select onChange={(e) => setUpdateDivision(JSON.parse(e.target.value))} defaultValue={address?.division} className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="division" id="">
                        <option>Select</option>
                        {
                            divisions?.map(division =>
                                <option key={division?.id} value={JSON.stringify({ name: division?.name, id: division?.id })}>{division?.name}</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Zip Code</label>
                    <input className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Zip Code' name='zipCode' type="text" />
                </div>

                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select District <span className='text-red-600'>*</span></label>
                    <select disabled={!updateDivision} onChange={(e) => setUpdateDistrict(JSON.parse(e.target.value))} defaultValue={address?.district} className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="district" id="">
                        <option>Select</option>
                        {
                            districts?.map(district => district?.division_id === updateDivision?.id &&
                                <option key={district?.id} value={JSON.stringify({ name: district?.name, id: district?.id })}>{district?.name}</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Email</label>
                    <input defaultValue={shippingEmail} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Email' name='shippingEmail' type="text" />
                </div>


                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select Upazilla <span className='text-red-600'>*</span></label>
                    <select disabled={!updateDistrict} onChange={(e) => setUpdateUpazila(JSON.parse(e.target.value))} defaultValue={address?.upazila} className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="upazila" id="">
                        <option>Select</option>
                        {
                            upazilas?.map(upzila => upzila?.district_id === updateDistrict?.id &&
                                <option key={upzila?.id} value={JSON.stringify({ name: upzila?.name, id: upzila?.id })}>{upzila?.name}</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Phone</label>
                    <input defaultValue={shippingPhone} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Phone' name='shippingPhone' type="text" />
                </div>
            </div>

            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Street Address <span className='text-red-600'>*</span></label>
            <textarea defaultValue={address?.address} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Address' name='address' type="text" />

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