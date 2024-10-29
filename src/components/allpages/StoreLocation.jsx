'use client'
import { getStoreLocation } from '@/lib/allpagesApi/allPagesApi';
import DangerHtml from '@/utility/dangerHtml/DangerHtml';
import Preloader from '@/utility/preloader/Preloader';
import React, { useEffect, useState } from 'react';

const StoreLocation = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await getStoreLocation();
                if (data) {
                    setData(data)
                }
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return (
        <div className='my-4 min-h-screen'>
            <div className='flex items-center justify-between mb-10'>
                <h1 className='text-xl md:text-3xl font-medium'>Store Location</h1>
            </div>
            {
                loading ? <Preloader /> : data?.data?.map(value =>
                    <DangerHtml key={value?._id} data={value?.description} />
                )
            }
        </div>
    );
};

export default StoreLocation;