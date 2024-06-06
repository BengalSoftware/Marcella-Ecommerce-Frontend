'use client'
import { getAllProductTypeOptions } from '@/lib/productApi/productApi';
import React, { useEffect, useState } from 'react';

const ProductTypeForm = ({ handleChange, productType }) => {
    const [productsType, setProductsType] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllProductTypeOptions();
            if (data) {
                setProductsType(data)
            }
        }
        fetchData();
    }, [])

    const makeOptions = (options) => {
        let allOptions = [];
        allOptions.push(<option value="">Select one</option>)
        options?.map((op, index) => {
            allOptions.push(<option key={index} value={op?.title} >{op?.title}</option>)
        })
        return allOptions;
    }

    return (
        <div>
            <label className='text-dark text-sm'>Product Type</label>
            <select value={productType?.name} onChange={handleChange} defaultValue={productType} name="productType" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                {
                    makeOptions(productsType?.result)
                }
            </select>
        </div>
    );
};

export default ProductTypeForm;