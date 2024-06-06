'use client'
import React, { useEffect, useState } from 'react';
import FestivalComponent from './FestivalComponent';
import { getFlashSaleOffer } from '@/lib/flashSale/flashSaleApi';

const AdsFestivalIndex = () => {
    const [flashSaleData, setFlashSaleData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getFlashSaleOffer();
                if (data) {
                    setFlashSaleData(data)
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
                flashSaleData?.result?.map(flashSale => (flashSale?.status === 'active' && flashSale?.offerType?.length > 0) &&
                    flashSale?.offerType?.map(flash =>
                        <FestivalComponent
                            key={flashSale?._id}
                            fesColor={flashSale?.color}
                            fesTitle={flashSale?.name}
                            offerDate={flashSale?.timeStamps}
                            endDate={flashSale?.endDate}
                            offerType={flash}
                        />
                    )

                )
            }
        </div>
    );
};

export default AdsFestivalIndex;