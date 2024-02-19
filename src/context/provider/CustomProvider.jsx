'use client'
import React from 'react';
import StateProvider from '../stateProvider/StateProvider';

const CustomProvider = ({ children }) => {
    return (
        <StateProvider>
            {children}
        </StateProvider>
    );
};

export default CustomProvider;