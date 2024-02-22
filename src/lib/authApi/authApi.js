import { baseUrl } from "../api/baseUrl";

// seller signup
const sellerSignupMutation = async (data) => {
    try {
        const res = await fetch(`${baseUrl}/auth/seller-register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            cache: 'force-cache'
        });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const responseData = await res.json();

        if (responseData) {
            localStorage.setItem('sauth', JSON.stringify(responseData));
        }

        return responseData;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};



//user and seller login
const userLoggedIn = async (data) => {
    try {
        const res = await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            cache: 'force-cache'
        });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const responseData = await res.json();

        if (responseData) {
            localStorage.setItem('sauth', JSON.stringify(responseData));
        }

        return responseData;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};


export {
    sellerSignupMutation,
    userLoggedIn
}