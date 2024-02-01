'use client'
import React, { useState } from 'react';
import { IoMdCloudUpload } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const UploadImage = () => {
    const [upImages, setUpImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);

    const handleImageChange = (e) => {
        const selectedFiles = e.target.files;

        const newImages = Array.from(selectedFiles);
        setUpImages([...upImages, ...newImages]);

        const newPreviews = newImages.map((file) => URL.createObjectURL(file));
        setImagePreviews([...imagePreviews, ...newPreviews]);
    };


    const handleDelete = (previewURL) => {
        const afterNewPreviews = imagePreviews?.filter(img => img !== previewURL);
        setImagePreviews(afterNewPreviews)
    }

    return (
        <div className='mt-5 flex items-start gap-4'>
            <div>
                <label htmlFor="upImg" className='border border-dashed border-gray-400 bg-white hover:bg-gray-100 cursor-pointer rounded-md text-6xl text-gray-400 p-4 block w-fit'>
                    <IoMdCloudUpload />
                </label>
                <input onChange={handleImageChange} className='hidden' type="file" name="" id="upImg" multiple />
            </div>

            <div className='flex flex-wrap gap-4'>
                {
                    imagePreviews.map((previewURL, index) => (
                        <div key={index} className='relative group'>
                            <img src={previewURL} alt={`Image Preview ${index + 1}`} className="max-w-40 max-h-40 rounded-lg border border-primary" />
                            <div className='bg-[rgb(0,0,0,0.5)] hidden absolute top-0 bottom-0 left-0 right-0 rounded-lg group-hover:flex items-center justify-center text-2xl text-white'>
                                <button type='button' onClick={() => handleDelete(previewURL)} className='hover:text-red-500'>
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default UploadImage;
