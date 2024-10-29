'use client'
import { getAllBrands } from '@/lib/categories/categoriesApi';
import React, { useEffect, useState } from 'react';

const BrandForm = ({ handleChange, manufacturer }) => {
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
            <select value={manufacturer?.name} onChange={handleChange} name="manufacturer" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                {
                    brands?.result?.map(brand =>
                        <option defaultValue={manufacturer} value={brand?._id}>{brand?.name}</option>
                    )
                }
            </select>
        </div>
    );
};

export default BrandForm;