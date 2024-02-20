'use client'
import { getAllSize } from '@/lib/variationApi/variationAPi';
import { Select } from 'antd';
import React, { useEffect, useState } from 'react';

const SizeForm = ({ setSelectedSizeOptin, sizeData }) => {
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

    const handleChange = (selectedValues) => {
        const selectedOptions = selectedValues.map(value => {
            const option = size.data.find(sz => sz.name === value);
            return { _id: option._id, name: option.name };
        });
        setSelectedSizeOptin(selectedOptions);
    };

    let options = [];
    size?.data?.map(sz => {
        options.push({
            label: sz?.name,
            value: sz?.name,
        });
    })

    return (
        <div>
            <label className='text-dark text-sm'>Size</label>
            <Select
                mode="multiple"
                allowClear
                style={{ padding: '6px' }}
                className='mt-2 py-2 w-full'
                defaultValue={sizeData}
                placeholder="Please select"
                onChange={handleChange}
                options={options}
            />
        </div>
    );
};

export default SizeForm;