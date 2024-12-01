import React from 'react';
import ProductDescription from '@/components/productDetails/ProductDescription';
import ProductDeliveryInfo from '@/components/productDetails/ProductDeliveryInfo';
import RelatedProducts from '@/components/productDetails/RelatedProducts';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import DetailsNavTab from '@/components/productDetails/DetailsNavTab';
import ProductImage from '@/components/productDetails/ProductImage';
import { getSingleProduct } from '@/lib/productApi/productApi';


export async function generateMetadata({ params }, parent) {
    const { slug } = params || {};
    const data = await getSingleProduct(slug);

    const { name, description, images } = data?.result || {};
    const previousImages = (await parent).openGraph?.images || []
    return {
        title: name ? `${name}` : 'Veendeshi',
        description: description,
        openGraph: {
            title: name ? `${name}` : 'Veendeshi',
            description: name,
            url: `https://veendeshi.com/product/${slug}`,
            images: [...images, ...previousImages]
        },
    };
}


const ProductDetailsPage = async ({ params }) => {
    const { slug } = params || {};
    const data = await getSingleProduct(slug);
    const { images } = data?.result || {};
    return (
        <div className='container mx-auto mb-10 mt-5'>
            <div className='mx-4 xl:mx-0'>
                <BreadCrumb breadcrumbs={data?.breadcrumb} />
                <div className='grid grid-cols-1 lg:grid-cols-7 gap-5'>
                    <div className='lg:col-span-2'>
                        <ProductImage dImages={images} />
                    </div>
                    <div className='lg:col-span-3 lg:pl-10'>
                        <ProductDescription product={data?.result} />
                    </div>
                    <div className='lg:col-span-2 lg:pl-16'>
                        <ProductDeliveryInfo product={data?.result} />
                    </div>
                </div>
                <DetailsNavTab product={data?.result} />
                <RelatedProducts slug={slug} />
            </div>
        </div>
    );
};

export default ProductDetailsPage;