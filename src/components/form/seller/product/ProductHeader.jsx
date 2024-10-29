'use client'
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { getSingleSeller } from '@/lib/sellerApi/sellerApi';
import { Alert } from 'antd';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

const ProductHeader = () => {
    const { seller } = useContext(AuthContext);
    const [sellerInfo, setSellerInfo] = useState(null)
    

    useEffect(() => {
        const fetchData = async () => {
            if (seller?.data?.user?.email) {
                try {
                    const res = await getSingleSeller(seller?.data?.user?.email);
                    if (res?.data) {
                        setSellerInfo(res?.data);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        };
        fetchData();
    }, [seller?.data?.user?.email]);


    return (
        <div className='flex items-center justify-between'>
            {
                sellerInfo?.address ? <Link href='/seller/add-product' className='bg-dark hover:bg-primary text-white px-4 py-2 rounded-md'>Add Product +</Link> :
                    <Alert
                        description="Please complete your profile. An address must be added."
                        type="error"
                    />
            }
            <div className='bg-white flex items-center rounded border border-primary pr-2'>
                <input className='p-2 rounded outline-none border-r mr-2' type='text' placeholder='Search' />
                <IoIosSearch className='text-2xl' />
            </div>
        </div>
    );
};

export default ProductHeader;