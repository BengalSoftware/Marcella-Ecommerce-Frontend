'use client'
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false, // This ensures that React Quill is not included during server-side rendering
});

const ProductDescriptionForm = () => {
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [termsCondition, setTermsCondition] = useState('');

    return (
        <div className='mt-5'>
            <label className='mb-2 block'>Short Description</label>
            <ReactQuill theme="snow" value={shortDescription} onChange={setShortDescription} placeholder='Short Description' />


            <label className='mb-2 mt-5 block'>Description</label>
            <ReactQuill theme="snow" value={description} onChange={setDescription} placeholder='Description' />


            <label className='mb-2 mt-5 block'>Terms & Conditions</label>
            <ReactQuill theme="snow" value={termsCondition} onChange={setTermsCondition} placeholder='Terms & Conditions' />
        </div>
    );
};

export default ProductDescriptionForm;