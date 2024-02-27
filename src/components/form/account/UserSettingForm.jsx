'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { getSingelUser, updateUserMutation } from '@/lib/accountApi/accountApi';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdCloudUpload } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';

const UserSettingForm = () => {
    const [userData, setUserData] = useState(null);
    const { user } = useContext(AuthContext);
    const { setProfileSuccess } = useContext(StateContext)
    // const [imagePreviews, setImagePreviews] = useState([]);
    const [uLoading, setULoading] = useState(false);
    // const [images, setUpImages] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSingelUser(user?.data?.user?.email);
                if (res) {
                    setUserData(res?.data)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();
    }, [user?.data?.user?.email])



    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        const name = e.target.name.value;
        const email = e.target.email.value;

        // if (name) formData.append('name', JSON.stringify(name))
        // if (email) formData.append('email', JSON.stringify(email))
        // if (images) formData.append('photoUrl', images?.[0])

        const upData = {
            name,
            email
        }

        try {
            setULoading(true);
            const res = await updateUserMutation(userData?.email, upData);
            if (res) {
                toast.success('Profile Update Successfull')
                setProfileSuccess(true)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setULoading(false)
        }
    }


    // handle image 
    // const handleImageChange = (e) => {
    //     const selectedFile = e.target.files[0];
    //     setUpImages([selectedFile]);
    //     const preview = URL.createObjectURL(selectedFile);
    //     setImagePreviews([preview]);
    // };



    // const handleDelete = (previewURL) => {
    //     const afterNewPreviews = imagePreviews?.filter(img => img !== previewURL);
    //     setImagePreviews(afterNewPreviews)
    // }

    // console.log(images)

    return (
        <div className='mt-5'>
            <form onSubmit={handleUpdateProfile}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <label className='text-dark text-sm'>Name <span className='text-red-500'>*</span></label>
                        <input type="text" required name='name' defaultValue={userData?.name} className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Name' />
                    </div>
                    <div>
                        <label className='text-dark text-sm'>Email <span className='text-red-500'>*</span></label>
                        <input type="email" required name='email' defaultValue={userData?.email} disabled className='border mt-2 border-gray-300 outline-none p-2 w-full block rounded-md placeholder:text-sm placeholder:font-light' placeholder='Email' />
                    </div>
                </div>

                {/* upload image start  */}
                {/* <div className='mt-5 flex items-start gap-4'>
                    <div>
                        <label htmlFor="upImg" className='border border-dashed border-gray-400 bg-white hover:bg-gray-100 cursor-pointer rounded-md text-6xl text-gray-400 p-4 block w-fit'>
                            <IoMdCloudUpload />
                        </label>
                        <input onChange={handleImageChange} className='hidden' type="file" name="" id="upImg" />
                    </div>

                    <div className='flex flex-wrap gap-4'>
                        {
                            imagePreviews.map((previewURL, index) => (
                                <div key={index} className='relative group'>
                                    <img src={previewURL} alt={`Image Preview ${index + 1}`} className="max-w-24 max-h-24 rounded-lg border border-primary" />
                                    <div className='bg-[rgb(0,0,0,0.5)] hidden absolute top-0 bottom-0 left-0 right-0 rounded-lg group-hover:flex items-center justify-center text-2xl text-white'>
                                        <button type='button' onClick={() => handleDelete(previewURL)} className='hover:text-red-500'>
                                            <MdDelete />
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div> */}
                {/* upload image end  */}

                <div className='flex items-center justify-end mt-5'>
                    <button className='bg-primary hover:bg-dark text-white px-6 py-2 rounded-md'>{uLoading ? 'Loading..' : 'Save Change'}</button>
                </div>
            </form>
        </div>
    );
};

export default UserSettingForm;