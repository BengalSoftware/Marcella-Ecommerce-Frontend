import SellerShopIndex from '@/components/shop';
import VendorShopCardWithBanner from '@/components/shop/VendorShopCardWithBanner';
import React from 'react';
import banner1 from '../../../../public/assets/seller1.png'
import banner2 from '../../../../public/assets/seller2.png'
import product1 from '../../../../public/assets/fogg.webp'
import product2 from '../../../../public/assets/product4.webp'


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

const ShopPage = () => {
    return (
        <div className='mt-5'>
            {
                products?.map((product, idx) =>
                    <VendorShopCardWithBanner
                        key={idx}
                        banner={product?.banner}
                        products={product?.img}
                    />
                )
            }
            <SellerShopIndex />
        </div>
    );
};

export default ShopPage;