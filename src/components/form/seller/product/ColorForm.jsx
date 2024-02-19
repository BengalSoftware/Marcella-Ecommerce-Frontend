import { getAllColor } from '@/lib/variationApi/variationAPi';
import React, { useEffect, useState } from 'react';

const ColorForm = ({ handleChange }) => {
    const [color, setColor] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllColor();
            if (data) {
                setColor(data)
            }
        }
        fetchData();
    }, [])


    return (
        <div>
            <label className='text-dark text-sm'>Color</label>
            <select onChange={handleChange} name="color" className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                <option value="">Select</option>
                {
                    color?.data?.map(cl =>
                        <option value={cl?.name}>{cl?.name}</option>
                    )
                }
            </select>
        </div>
    );
};

export default ColorForm;