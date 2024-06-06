'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { getSingleSeller, updateSellerMutation } from '@/lib/sellerApi/sellerApi';
import React, { useContext, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

const SellerSettingForm = () => {
    const [sellerInfo, setSellerInfo] = useState(null);
    const [updateLoading, setUpdateLoading] = useState(null);
    const [updateSellerInfo, setUpdateSellerInfo] = useState(null)
    const { seller } = useContext(AuthContext);
    const { _id, email, name, phone, metaTitle, metaDescription, address } = sellerInfo?.data || {};
    const profileRef = useRef();
    const coverRef = useRef()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSingleSeller(seller?.data?.user?.email);
                if (data) {
                    setSellerInfo(data)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [seller?.data?.user?.email]);


    const handleUpdateSellerInfo = async (e) => {
        e.preventDefault();

        // const formData = new FormData();
        // if (profileRef.current) formData.append('profileUrl', profileRef.current.files[0])
        // if (coverRef.current) formData.append('coverUrl', coverRef.current.files[0])
        // if (updateSellerInfo?.name) formData.append('name', updateSellerInfo?.name)
        // if (updateSellerInfo?.email) formData.append('email', updateSellerInfo?.email)
        // if (updateSellerInfo?.phone) formData.append('phone', updateSellerInfo?.phone)
        // if (updateSellerInfo?.metaTitle) formData.append('metaTitle', updateSellerInfo?.metaTitle)
        // if (updateSellerInfo?.metaDescription) formData.append('metaDescription', updateSellerInfo?.metaDescription)

        const updateObject = {}

        if (profileRef?.current?.files[0]) updateObject.profileUrl = profileRef?.current?.files[0]
        if (coverRef?.current?.files[0]) updateObject.coverUrl = coverRef?.current?.files[0]
        if (updateSellerInfo?.name) updateObject.name = updateSellerInfo?.name
        if (updateSellerInfo?.email) updateObject.email = updateSellerInfo?.email
        if (updateSellerInfo?.phone) updateObject.phone = updateSellerInfo?.phone
        if (updateSellerInfo?.address) updateObject.address = updateSellerInfo?.address
        if (updateSellerInfo?.metaTitle) updateObject.metaTitle = updateSellerInfo?.metaTitle
        if (updateSellerInfo?.metaDescription) updateObject.metaDescription = updateSellerInfo?.metaDescription

        try {
            setUpdateLoading(true)
            const res = await updateSellerMutation(_id, updateObject);
            if (res) {
                toast.success('Update Successfull')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setUpdateLoading(false)
        }
    }


    const handleChange = (e) => {
        const name = e.target?.name;
        const value = e.target?.value;

        const newSeller = { ...updateSellerInfo, profileUrl: profileRef.current.files[0] };
        newSeller[name] = value;
        setUpdateSellerInfo(newSeller);
    }


    return (
        <div className='mt-5'>
            <form encType='multipart/form-data' onSubmit={handleUpdateSellerInfo}>
                <div className='mb-4'>
                    <label className='text-dark text-sm'>Name</label>
                    <input onChange={handleChange} type="text" defaultValue={name} name='name' className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Name' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5'>
                    <div className='mb-4'>
                        <label className='text-dark text-sm'>Phone</label>
                        <input onChange={handleChange} type="text" defaultValue={phone} name='phone' className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Phone' />
                    </div>
                    <div className='mb-4'>
                        <label className='text-dark text-sm'>Email</label>
                        <input onChange={handleChange} type="email" defaultValue={email} name='email' disabled className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Email' />
                    </div>
                    <div className='mb-4'>
                        <label className='text-dark text-sm'>Profile</label>
                        <input onChange={handleChange} ref={profileRef} type="file" name='profileUrl' className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Browse' />
                    </div>
                    <div className='mb-4'>
                        <label className='text-dark text-sm'>Cover</label>
                        <input onChange={handleChange} ref={coverRef} type="file" name='coverUrl' className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Browse' />
                    </div>
                </div>
                <div className='mb-4'>
                    <label className='text-dark text-sm'>Address <span className='text-red-500'>*</span></label>
                    <textarea onChange={handleChange} name='address' defaultValue={address} className="border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light" id="" placeholder='Address' cols="4" rows="3"></textarea>
                </div>
                <div className='mb-4'>
                    <label className='text-dark text-sm'>Meta Title</label>
                    <input onChange={handleChange} type="text" name='metaTitle' defaultValue={metaTitle} className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Meta Title' />
                </div>
                <div className='mb-4'>
                    <label className='text-dark text-sm'>Meta Description</label>
                    <textarea onChange={handleChange} name='metaDescription' defaultValue={metaDescription} className="border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light" id="" placeholder='Meta Description' cols="4" rows="3"></textarea>
                </div>

                <div className='flex items-center justify-end mt-5'>
                    <button className='bg-primary hover:bg-dark text-white px-6 py-2 rounded-md'>{updateLoading ? 'Loading..' : 'Save Change'}</button>
                </div>
            </form>
        </div>
    );
};

export default SellerSettingForm;