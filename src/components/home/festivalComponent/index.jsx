import ad3 from '../../../../public/assets/ad2.gif'
import React from 'react';
import FestivalComponent from './FestivalComponent';
import { getFlashSaleOffer } from '@/lib/flashSale/flashSaleApi';

const AdsFestivalIndex = async () => {
    const flashSaleData = await getFlashSaleOffer();
    return (
        <div>
            {
                flashSaleData?.result?.map(flashSale => flashSale?.status === 'active' &&
                    <FestivalComponent
                        key={flashSale?._id}
                        fesColor={flashSale?.color || '#ffcc00'}
                        fesImage={flashSale?.image || ad3}
                        fesTitle={flashSale?.name}
                        offerDate={flashSale?.timeStamps}
                        endDate={flashSale?.endDate}
                        offerType={flashSale?.offerType}
                    />
                )
            }
        </div>
    );
};

export default AdsFestivalIndex;