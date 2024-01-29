import { festivalData } from '@/fakeData/fakeData';
import React from 'react';
import FestivalComponent from './FestivalComponent';

const AdsFestivalIndex = () => {
    return (
        <div>
            {
                festivalData?.map((product, idx) =>
                    <FestivalComponent
                        key={idx}
                        fesColor={product?.color}
                        fesImage={product?.image}
                        fesTitle={product?.festivalName}
                        products={product?.products}
                    />
                )
            }
        </div>
    );
};

export default AdsFestivalIndex;