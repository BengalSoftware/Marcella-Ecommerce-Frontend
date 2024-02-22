'use client'
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [seller, setSeller] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // seller
    useEffect(() => {
        const getSeller = JSON.parse(localStorage.getItem('sauth'));
        if (getSeller) {
            setSeller(getSeller);
            setIsLoading(false)
        } else {
            setIsLoading(false)
        }
    }, [])


    const authInfo = {
        seller,
        isLoading,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;