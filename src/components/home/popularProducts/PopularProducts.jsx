import ProductCard from '@/components/card/ProductCard';
import { getAllProduct } from '@/lib/productApi/productApi';
import ProductSlider from '@/utility/productSlider/ProductSlider';
import React from 'react';

const PopularProducts = async () => {
    const data = await getAllProduct();
    
    return (
        <div className='mt-10'>
            <h1 className='font-medium text-2xl'>Popular Products</h1>
            <div className='mt-6'>
                <ProductSlider>
                    {
                        data?.result?.data?.map(product => (parseFloat(product?.averageRating?.$numberDecimal) >= 3.5) &&
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

export default PopularProducts;