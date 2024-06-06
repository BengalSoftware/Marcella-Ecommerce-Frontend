'use client'
import { getDeliveryInfo } from '@/lib/allpagesApi/allPagesApi';
import DangerHtml from '@/utility/dangerHtml/DangerHtml';
import Preloader from '@/utility/preloader/Preloader';
import React, { useEffect, useState } from 'react';

const DeliveryInfo = () => {
    const [data, setData] = useState(null);
    const [language, setLanguage] = useState('english')
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await getDeliveryInfo();
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
                <h1 className='text-xl md:text-3xl font-medium'>{language === 'english' ? 'Delivery Info' : 'ডেলিভারি তথ্য'}</h1>
                <select onChange={(e) => setLanguage(e.target.value)} className='outline-none border border-dark rounded font-light text-sm'>
                    <option value="english">English</option>
                    <option value="bangla">Bangla</option>
                </select>
            </div>
            {
                loading ? <Preloader /> : data?.data?.map(value =>
                    <DangerHtml key={value?._id} data={language === 'english' ? value?.description : value?.banglaDescription} />
                )
            }
        </div>
    );
};

export default DeliveryInfo;