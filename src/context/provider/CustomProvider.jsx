'use client'
import React from 'react';
import StateProvider from '../stateProvider/StateProvider';
import AuthProvider from '../authProvider/AuthProvider';

const CustomProvider = ({ children }) => {
    return (
        <AuthProvider>
            <StateProvider>
                {children}
            </StateProvider>
        </AuthProvider>
    );
};

export default CustomProvider;