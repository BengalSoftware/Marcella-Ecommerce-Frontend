import React from 'react';
import FestivalComponent from './FestivalComponent';
import { getFlashSaleOffer } from '@/lib/flashSale/flashSaleApi';

const AdsFestivalIndex = async () => {
    const flashSaleData = await getFlashSaleOffer();
    
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