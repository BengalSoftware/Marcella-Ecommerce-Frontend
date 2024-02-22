'use client'
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [seller, setSeller] = useState(null);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [uIsLoading, setUisLoading] = useState(true);

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


    // user
    useEffect(() => {
        const getUser = JSON.parse(localStorage.getItem('uauth'));
        if (getUser) {
            setUser(getUser);
            setUisLoading(false)
        } else {
            setUisLoading(false)
        }
    }, [])


    const authInfo = {
        seller,
        user,
        isLoading,
        uIsLoading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;