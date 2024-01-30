import Image from 'next/image';
import React from 'react';
import img from '../../../../public/assets/product.webp'
import ProductDescription from '@/components/productDetails/ProductDescription';
import ProductDeliveryInfo from '@/components/productDetails/ProductDeliveryInfo';
import RelatedProducts from '@/components/productDetails/RelatedProducts';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import DetailsNavTab from '@/components/productDetails/DetailsNavTab';

const ProductDetailsPage = () => {
    return (
        <div className='container mx-auto mb-10 mt-5'>
            <div className='mx-4 md:mx-0'>
                <BreadCrumb />
                <div className='grid grid-cols-1 lg:grid-cols-5'>
                    <div className='col-span-2'>
                        <Image quality={100} placeholder='blur' src={img} alt='detail' />
                    </div>
                    <div className='col-span-2 pr-20'>
                        <ProductDescription />
                    </div>
                    <div className='col-span-1'>
                        <ProductDeliveryInfo />
                    </div>
                </div>
                <DetailsNavTab />
                <RelatedProducts />
            </div>
        </div>
    );
};

export default ProductDetailsPage;