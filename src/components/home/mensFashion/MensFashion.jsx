import ProductCard from '@/components/card/ProductCard';
import React from 'react';
import ProductSlider from '@/utility/productSlider/ProductSlider';
import { getProductByProductType } from '@/lib/productApi/productApi';

const MensFashion = async () => {
    const data = await getProductByProductType('mens-fashion');

    return (
        <div className='mt-10'>
            <h1 className='font-medium text-2xl'>Mens Fashion</h1>
            <div className='mt-6'>
                <ProductSlider>
                    {
                        data?.result?.map(product =>
                            <div key={product?._id} className='px-1 md:px-2'>
                                <ProductCard
                                    product={product}
                                />
                            </div>
                        )
                    }
                </ProductSlider>
            </div>
        </div>
    );
};

export default MensFashion;