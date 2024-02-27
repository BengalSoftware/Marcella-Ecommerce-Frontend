'use client'
import React, { createContext, useState } from 'react';

export const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [sellerPSuccess, setSellerPSuccess] = useState(false);
    const [addressSuccess, setAddressSuccess] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [profileSuccess, setProfileSuccess] = useState(false)


    const stateInfo = {
        sellerPSuccess,
        setSellerPSuccess,
        addressSuccess,
        setAddressSuccess,
        modalOpen,
        setModalOpen,
        profileSuccess,
        setProfileSuccess
    }

    return (
        <StateContext.Provider value={stateInfo}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;