'use client'
import React, { createContext, useState } from 'react';

export const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [sellerPSuccess, setSellerPSuccess] = useState(false);
    const [addressSuccess, setAddressSuccess] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [profileSuccess, setProfileSuccess] = useState(false);
    const [cartSuccess, setCartSuccess] = useState(false);
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [selectSuccess, setSelectSuccess] = useState(false);
    const [wishlistSuccess, setWishlistSuccess] = useState(false);
    const [checkoutSuccess, setCheckoutSuccess] = useState(false);
    const [updateLayout, setUpdateLayout] = useState(false);
    const [activeLayout, setActiveLayout] = useState(1)


    const stateInfo = {
        sellerPSuccess,
        setSellerPSuccess,
        addressSuccess,
        setAddressSuccess,
        modalOpen,
        setModalOpen,
        profileSuccess,
        setProfileSuccess,
        cartSuccess,
        setCartSuccess,
        cartDrawerOpen,
        setCartDrawerOpen,
        selectSuccess,
        setSelectSuccess,
        wishlistSuccess,
        setWishlistSuccess,
        checkoutSuccess,
        setCheckoutSuccess,
        updateLayout,
        setUpdateLayout,
        activeLayout,
        setActiveLayout
    }

    return (
        <StateContext.Provider value={stateInfo}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;