'use client'
import Cookies from 'js-cookie';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [seller, setSeller] = useState(null);
    const [sellerSuccess, setSellerSuccess] = useState(false);

    // seller
    useEffect(() => {
        const seller = Cookies.get('sellerData')
        if (seller) {
            const parseSeller = JSON?.parse(seller);
            setSeller(parseSeller);
        }
    }, [])

    useEffect(() => {
        const fetchSellerData = async () => {
            try {
                const seller = Cookies.get('sellerData');
                if (seller) {
                    const parseSeller = JSON.parse(seller);
                    setSeller(parseSeller);
                }
            } catch (error) {
                console.error('Error fetching seller data:', error);
            }
        };

        fetchSellerData();

        if (sellerSuccess) {
            fetchSellerData();
        }
    }, [sellerSuccess, setSeller]);


    const authInfo = {
        seller,
        sellerSuccess,
        setSellerSuccess
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;