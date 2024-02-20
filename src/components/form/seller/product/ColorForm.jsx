import { getAllColor } from '@/lib/variationApi/variationAPi';
import { Select } from 'antd';
import React, { useEffect, useState } from 'react';

const ColorForm = ({ setSelectedColorOptin }) => {
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


    const handleChange = (selectedValues) => {
        const selectedOptions = selectedValues.map(value => {
            const option = color.data.find(col => col.name === value);
            return { _id: option._id, name: option.name };
        });
        setSelectedColorOptin(selectedOptions);
    };

    let options = [];
    color?.data?.map(col => {
        options.push({
            label: col?.name,
            value: col?.name,
        });
    })

    return (
        <div>
            <label className='text-dark text-sm'>Color</label>
            <Select
                mode="multiple"
                allowClear
                style={{ padding: '6px' }}
                className='mt-2 py-2 w-full'
                placeholder="Please select"
                onChange={handleChange}
                options={options}
            />
        </div>
    );
};

export default ColorForm;