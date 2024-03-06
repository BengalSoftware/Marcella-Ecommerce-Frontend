'use client'
import React, { useContext, useEffect, useState } from 'react';
import { getSelectedLayoutByEmail } from '@/lib/layoutApi/layoutApi';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import Layout1 from './shopLayout/Layout1';
import Layout2 from './shopLayout/Layout2';
import { StateContext } from '@/context/stateProvider/StateProvider';


const ShopLayout = () => {
    const [selectedLayout, setSelectedLayout] = useState(null)
    const { seller } = useContext(AuthContext);
    const { updateLayout, setUpdateLayout } = useContext(StateContext)

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

        fetchData();


        if (updateLayout) {
            fetchData();
            setUpdateLayout(false)
        }
    }, [seller?.data?.user?.email, updateLayout])


    return (
        <div className='mt-5'>

            {
                selectedLayout?.data?.map(layout => {
                    if (layout?.selected === 1) {
                        return <Layout1 key={layout?.selected} />
                    } else if (layout?.selected === 2) {
                        return <Layout2 key={layout?.selected} />
                    }
                    return null;
                })
            }

        </div>
    );
};

export default ShopLayout;