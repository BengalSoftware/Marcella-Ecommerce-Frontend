'use client'
import React, { useContext, useEffect, useState } from 'react';
import VendorShopCardWithBanner from './VendorShopCardWithBanner';
import SellerShopIndex from '.';
import banner1 from '../../../public/assets/seller1.png'
import banner2 from '../../../public/assets/seller2.png'
import product1 from '../../../public/assets/fogg.webp'
import product2 from '../../../public/assets/product4.webp'
import { getSelectedLayoutByEmail } from '@/lib/layoutApi/layoutApi';
import { AuthContext } from '@/context/authProvider/AuthProvider';


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

const ShopLayout = () => {
    const [selectedLayout, setSelectedLayout] = useState(null)
    const { seller } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (seller?.data?.user?.email) {
                    const res = await getSelectedLayoutByEmail(seller?.data?.user?.email);
                    if (res) {
                        setSelectedLayout(res)
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [seller?.data?.user?.email])

    console.log(seller?.data?.user?.email)

    return (
        <div className='mt-5'>
            {/* {
                products?.map((product, idx) =>
                    <VendorShopCardWithBanner
                        key={idx}
                        banner={product?.banner}
                        products={product?.img}
                    />
                )
            }
            <SellerShopIndex /> */}

            {
                selectedLayout?.data?.map(layout => {
                    if (layout?.selected === 1) {
                        return <p key={layout.id}>hello</p>; // Always add a unique key prop when rendering lists
                    } else if (layout?.selected === 9) { // Changed to 2 as you were checking for the same value twice
                        return <p key={layout.id}>ok</p>; // Always add a unique key prop when rendering lists
                    }
                    return null; // Return null for cases where none of the conditions match
                })
            }

        </div>
    );
};

export default ShopLayout;