'use client'
import React, { useContext, useEffect, useState } from 'react';
import AddressCard from './AddressCard';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { getAllAddressByEmail } from '@/lib/addressApi/addressApi';
import { StateContext } from '@/context/stateProvider/StateProvider';

const AllAddress = () => {
    const [allAddress, setAllAddress] = useState(null);
    const { user } = useContext(AuthContext);
    const { addressSuccess } = useContext(StateContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user?.data?.user?.email) {
                    const res = await getAllAddressByEmail(user?.data?.user?.email);
                    setAllAddress(res)
                }
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
        if (addressSuccess) {
            fetchData();
        }
    }, [user?.data?.user?.email])


    console.log(allAddress)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
                allAddress?.map(add =>
                    <AddressCard
                        key={add?._id}
                        adrs={add}
                    />
                )
            }
        </div>
    );
};

export default AllAddress;