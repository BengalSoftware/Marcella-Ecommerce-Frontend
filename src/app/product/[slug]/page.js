import Image from 'next/image';
import React from 'react';
import img from '../../../../public/assets/product.webp'
import ProductDescription from '@/components/productDetails/ProductDescription';

const ProductDetailsPage = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='mx-4 md:mx-0'>
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-5'>
                    <div className='col-span-2'>
                        <Image quality={100} placeholder='blur' src={img} alt='detail' />
                    </div>
                    <div className='col-span-2'>
                        <ProductDescription />
                    </div>
                    <div className='col-span-1'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;