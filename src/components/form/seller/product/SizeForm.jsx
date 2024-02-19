'use client'
import { getAllSize } from '@/lib/variationApi/variationAPi';
import React, { useEffect, useState } from 'react';

const SizeForm = ({ handleChange }) => {
    const [size, setSize] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllSize();
            if (data) {
                setSize(data)
            }
        }
        fetchData();
    }, [])

    
    return (
        <div>
            <label className='text-dark text-sm'>Size</label>
            <select onChange={handleChange} name="size" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                <option value="">Select</option>
                {
                    size?.data?.map(sz =>

                        <option key={sz?._id} value={sz?.name}>{sz?.name}</option>
                    )
                }
            </select>
        </div>
    );
};

export default SizeForm;