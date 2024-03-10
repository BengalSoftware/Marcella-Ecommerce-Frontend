import React from 'react';
import banner1 from '../../../../public/assets/Menu-3.jpg'
import banner2 from '../../../../public/assets/Menu-4.jpg'
import product1 from '../../../../public/assets/fogg.webp'
import product2 from '../../../../public/assets/product4.webp'
import SellerShopIndex from '..';
import Image from 'next/image';
import Slider from 'react-slick';
import { productSettings } from '@/utility/sliderSettings/productSettings';
import ProductCard from '@/components/card/ProductCard';


const products = [
    {
        banner: banner1,
        img: product1
    },
    {
        banner: banner2,
        img: product2
    },
]


const Layout2 = () => {
    return (
        <div>
            {
                products?.map((product, idx) =>
                    <div className='my-4'>
                        <div className='grid grid-cols-2 w-full items-center gap-x-4 mb-4'>
                            <Image className='rounded-md' src={product?.banner} alt='banner' quality={100} placeholder='blur' />
                            <Image className='rounded-md' src={product?.banner} alt='banner' quality={100} placeholder='blur' />
                        </div>
                        <Slider {...productSettings}>
                            {
                                Array(5).fill().map((_, idx) =>
                                    <div key={idx} className='px-1 md:px-2'>
                                        <ProductCard imgs={product?.img} />
                                    </div>
                                )
                            }
                        </Slider>
                    </div>
                )
            }
            <SellerShopIndex />
        </div>
    );
};

export default Layout2;