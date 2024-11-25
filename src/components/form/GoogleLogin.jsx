"use client"
import { AuthContext } from '@/context/authProvider/AuthProvider';
import { baseUrl } from '@/lib/api/baseUrl'
import React, { useContext, useEffect } from 'react'

const GoogleLogin = () => {
    const { setUserLoginSuccess } = useContext(AuthContext);
    const getUser = async () => {
        try {
            const res = await fetch(`${baseUrl}/auth/login/success`, {credentials: "include"});
            const data = await res.json();
            if(data.success)
            {
                localStorage.setItem('uauth', JSON.stringify(data));
                toast.success('Login Successfull');
                setUserLoginSuccess(true);
            }
        } catch (error) {
            console.error(error);
        }
    }
 
    useEffect(() => {
        getUser();
    }, [])
}

export default GoogleLogin