import { getFlashSaleOfferType } from '@/lib/flashSale/flashSaleApi';
import React, { useEffect, useState } from 'react';

const FlashSaleOfferTypeForm = ({ handleChange }) => {
    const [flashType, setFlashType] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getFlashSaleOfferType();
            if (data) {
                setFlashType(data)
            }
        }
        fetchData();
    }, [])


    return (
        <div>
            <label className='text-dark text-sm'>FlashSale type <span className='text-red-500'>*</span></label>
            <select onChange={handleChange} name="flashSaleOfferType" required className='block w-full border rounded-md p-2.5 mt-2 outline-none text-dark text-sm'>
                <option value="">Select</option>
                {
                    flashType?.data?.map(flash =>
                        <option value={flash?.name}>{flash?.name}</option>
                    )
                }
            </select>
        </div>
    );
};

export default FlashSaleOfferTypeForm;