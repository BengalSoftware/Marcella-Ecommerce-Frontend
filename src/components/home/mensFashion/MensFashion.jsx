import ProductCard from '@/components/card/ProductCard';
import React from 'react';
import ProductSlider from '@/utility/productSlider/ProductSlider';
import { getProductByProductType } from '@/lib/productApi/productApi';

const MensFashion = async ({ type }) => {
    const data = await getProductByProductType(type);

    return (
        <div>
            <div className='mt-10'>
                <h1 className='font-medium text-xl md:text-2xl capitalize'>{type}</h1>
                <div className='mt-6'>
                    {
                        data?.result?.length > 5 ? <ProductSlider>
                            {
                                data?.result?.map(product =>
                                    <div key={product?._id} className='px-1 md:px-2'>
                                        <ProductCard
                                            product={product}
                                        />
                                    </div>
                                )
                            }
                        </ProductSlider> :
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                                {
                                    data?.result?.map(product =>
                                        <div key={product?._id}>
                                            <ProductCard
                                                product={product}
                                            />
                                        </div>
                                    )
                                }
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default MensFashion;