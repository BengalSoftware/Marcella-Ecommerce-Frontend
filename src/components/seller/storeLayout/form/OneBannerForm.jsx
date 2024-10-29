'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { createStoreLayoutWithProduct } from '@/lib/layoutStore/layoutStoreApi';
import { getSellerProduct } from '@/lib/productApi/productApi';
import { getSingleSeller } from '@/lib/sellerApi/sellerApi';
import { Select } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import StoreLayoutTable from '../table/StoreLayoutTable';

const OneBannerForm = ({ activeButton }) => {
    const imgRef = useRef();
    const [products, setProducts] = useState(null);
    const [singleSeller, setSingleSeller] = useState(null);
    const { seller } = useContext(AuthContext);
    const [selectedProduct, setSelectedProduct] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            if (singleSeller) {
                try {
                    const data = await getSellerProduct(singleSeller);
                    if (data) {
                        setProducts(data)
                    }
                } catch (error) {
                    console.error(error)
                }
            }
        }

        fetchData();
    }, [singleSeller])

    // fetch single seller 
    useEffect(() => {
        const fetchData = async () => {
            if (seller?.data?.user?.email) {
                try {
                    const res = await getSingleSeller(seller?.data?.user?.email);
                    if (res?.data) {
                        setSingleSeller(res?.data?._id);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        };
        fetchData();
    }, [seller?.data?.user?.email]);


    const handleChange = (value) => {
        setSelectedProduct(value)
    };

    const options = [];
    products?.result?.data?.map(product =>
        options.push({
            label: product?.name,
            value: product?._id,
        })
    )



    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(); // Initialize formData here

        if (selectedProduct) formData.append('products', selectedProduct);
        if (imgRef.current) formData.append('images', imgRef.current.files[0]);

        const data = await createStoreLayoutWithProduct(seller?.data?.user?.email, formData);
        if (data) {
            toast.success('Success');
        }
    };



    return (
        <div className='mt-20 border-t border-dashed border-t-primary pt-5'>
            <h2 className='text-xl font-medium capitalize'>{activeButton} Banner</h2>
            <form encType='multipart/form-data' className='mt-5' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-2'>
                    <div>
                        <label className='text-lg'>Image <span className='text-red-500'>*</span></label>
                        <input multiple={activeButton === 'two' || activeButton === 'three'} className='border border-gray-300 mt-2 outline-none p-1.5 placeholder:text-sm rounded-md w-full block' placeholder='Image' ref={imgRef} name='image' type="file" />
                    </div>
                    <div className='mt-5'>
                        <label className='text-lg'>Products <span className='text-red-500'>*</span></label>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                width: '100%',
                            }}
                            placeholder="Please select"
                            // defaultValue={['a10', 'c12']}
                            onChange={handleChange}
                            options={options}
                        />
                    </div>
                </div>
                <div className='flex items-center justify-end mt-5'>
                    <button type='submit' className='text-white font-medium bg-primary px-6 py-2 rounded hover:bg-dark ease-in-out duration-500'>{'Submit'}</button>
                </div>
            </form>
            <StoreLayoutTable
                email={seller?.data?.user?.email}
            />
        </div>
    );
};

export default OneBannerForm;