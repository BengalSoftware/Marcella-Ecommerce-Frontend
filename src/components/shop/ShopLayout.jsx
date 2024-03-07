'use client'
import React, { useContext, useEffect, useState } from 'react';
import { getSelectedLayoutByEmail } from '@/lib/layoutApi/layoutApi';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import Layout1 from './shopLayout/Layout1';
import Layout2 from './shopLayout/Layout2';
import { StateContext } from '@/context/stateProvider/StateProvider';
import { getSingleSellerById } from '@/lib/sellerApi/sellerApi';
import Layout3 from './shopLayout/Layout3';


const ShopLayout = ({ slug }) => {
    const [selectedLayout, setSelectedLayout] = useState(null)
    const [sellerInfo, setSellerInfo] = useState(null)
    const [sellerId, setSellerId] = useState(null);
    const { seller } = useContext(AuthContext);
    const { updateLayout, setUpdateLayout, setActiveLayout } = useContext(StateContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (sellerInfo?.data?.email) {
                    const res = await getSelectedLayoutByEmail(sellerInfo?.data?.email);
                    if (res) {
                        setSelectedLayout(res)
                    }
                } else if (seller?.data?.user?.email) {
                    const res = await getSelectedLayoutByEmail(seller?.data?.user?.email);
                    if (res) {
                        setSelectedLayout(res)
                        setActiveLayout(res?.data?.[0]?.selected)
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();


        if (updateLayout) {
            fetchData();
            setUpdateLayout(false)
        }
    }, [seller?.data?.user?.email, sellerInfo?.data?.email, updateLayout])


    useEffect(() => {
        // const fetLoaclData = () => {
        //     const id = JSON.parse(localStorage.getItem('sci'))
        //     setSellerId(id)
        // }
        // fetLoaclData()
        const fetchData = async () => {
            try {
                if (slug) {
                    const res = await getSingleSellerById(slug)
                    if (res) {
                        setSellerInfo(res)
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [slug])


    return (
        <div className='mt-5'>

            {
                selectedLayout?.data?.map(layout => {
                    if (layout?.selected === 1) {
                        return <Layout1 key={layout?.selected} />
                    } else if (layout?.selected === 2) {
                        return <Layout2 key={layout?.selected} />
                    }
                    else if (layout?.selected === 3) {
                        return <Layout3 key={layout?.selected} />
                    }
                    return null;
                })
            }

        </div>
    );
};

export default ShopLayout;