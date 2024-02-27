'use client'
import React, { useEffect } from 'react';

const DisableScroll = () => {
    useEffect(() => {
        const disableScroll = (event) => {
            event.preventDefault();
        };
        window.addEventListener('wheel', disableScroll, { passive: false });
        return () => {
            window.removeEventListener('wheel', disableScroll);
        };
    }, []);

    return null;
};

export default DisableScroll;
