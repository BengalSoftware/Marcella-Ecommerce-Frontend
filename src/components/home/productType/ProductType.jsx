import { getAllProductTypeOptions } from '@/lib/productApi/productApi';
import React from 'react';
import MensFashion from '../mensFashion/MensFashion';

const ProductType = async () => {
    const data = await getAllProductTypeOptions();

    return (
        <div>
            {
                data?.result?.map(type =>
                    <MensFashion
                        key={type?._id}
                        type={type?.title}
                    />
                )
            }
        </div>
    );
};

export default ProductType;