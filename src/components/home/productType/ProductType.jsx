'use client'
import { getAllProductTypeOptions } from '@/lib/productApi/productApi';
import React, { useEffect, useState } from 'react';
import MensFashion from '../mensFashion/MensFashion';

const ProductType = () => {
    const [data, setData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllProductTypeOptions();
                if (data) {
                    setData(data)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            {
                data?.result?.map(type =>
                    <MensFashion
                        key={type?._id}
                        type={type?.title}
                    />
                )
            }
        </div>
    );
};

export default ProductType;