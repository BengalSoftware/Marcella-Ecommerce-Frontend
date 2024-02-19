'use client'
import React, { createContext, useState } from 'react';

export const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [sellerPSuccess, setSellerPSuccess] = useState(false);


    const stateInfo = {
        sellerPSuccess,
        setSellerPSuccess
    }

    return (
        <StateContext.Provider value={stateInfo}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;