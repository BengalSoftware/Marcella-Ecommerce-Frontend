'use client'
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [seller, setSeller] = useState(null);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [uIsLoading, setUisLoading] = useState(true);
    const [sellerLoginSuccess, setSellerLoginSuccess] = useState(false)
    const [userLoginSuccess, setUserLoginSuccess] = useState(false)
    const [sellerLogoutSuccess, setSellerLogoutSuccess] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem('uauth')
        localStorage.removeItem('sauth')
        setSellerLogoutSuccess(true);
        setSellerLoginSuccess(false)
        window.location.reload()
    }


    // seller
    useEffect(() => {
        const fetchData = () => {
            const getSeller = JSON.parse(localStorage.getItem('sauth'));
            if (getSeller) {
                setSeller(getSeller);
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }
        }
        fetchData();
        if (sellerLoginSuccess || sellerLogoutSuccess) {
            fetchData();
        }
    }, [sellerLoginSuccess, sellerLogoutSuccess])


    // user
    useEffect(() => {
        const fetchData = () => {
            const getUser = JSON.parse(localStorage.getItem('uauth'));
            if (getUser) {
                setUser(getUser);
                setUisLoading(false)
            } else {
                setUisLoading(false)
            }
        }
        fetchData();

        if (userLoginSuccess) {
            fetchData();
        }
    }, [userLoginSuccess])


    const authInfo = {
        seller,
        user,
        isLoading,
        uIsLoading,
        sellerLoginSuccess,
        setSellerLoginSuccess,
        userLoginSuccess,
        setUserLoginSuccess,
        handleLogout,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;