'use client'
import React, { useEffect, useState } from 'react';

const OfferCount = ({ endDate }) => {
    const [countdown, setCountdown] = useState(null);

    useEffect(() => {
        const targetDate = new Date(endDate);

        const interval = setInterval(() => {

            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const formattedCountdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            setCountdown(formattedCountdown);

            if (distance < 0) {
                clearInterval(interval);
                setCountdown("Offer expired");
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <h1 className='text-xs md:text-base'>{countdown}</h1>
        </div>
    );
};

export default OfferCount;