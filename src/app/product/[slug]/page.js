import React from 'react';
import ProductDescription from '@/components/productDetails/ProductDescription';
import ProductDeliveryInfo from '@/components/productDetails/ProductDeliveryInfo';
import RelatedProducts from '@/components/productDetails/RelatedProducts';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import DetailsNavTab from '@/components/productDetails/DetailsNavTab';
import ProductImage from '@/components/productDetails/ProductImage';

const ProductDetailsPage = () => {
    return (
        <div className='container mx-auto mb-10 mt-5'>
            <div className='mx-4 xl:mx-0'>
                <BreadCrumb />
                <div className='grid grid-cols-1 lg:grid-cols-7 gap-5'>
                    <div className='lg:col-span-2'>
                        <ProductImage />
                    </div>
                    <div className='lg:col-span-3 lg:pl-10'>
                        <ProductDescription />
                    </div>
                    <div className='lg:col-span-2 lg:pl-16'>
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