'use client'
import { getAllBrands } from '@/lib/categories/categoriesApi';
import React, { useEffect, useState } from 'react';

const BrandForm = ({ handleChange }) => {
    const [brands, setBrands] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllBrands();
            if (data) {
                setBrands(data)
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <label className='text-dark text-sm'>Brand</label>
            <select onChange={handleChange} name="manufacturer" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                <option value="">Select</option>
                {
                    brands?.result?.map(brand =>
                        <option value={brand?._id}>{brand?.name}</option>
                    )
                }
            </select>
        </div>
    );
};

export default BrandForm;