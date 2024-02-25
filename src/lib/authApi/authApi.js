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
        console.error(error);
        throw error;
    }
};


// user signup
const userSignupMutation = async (data) => {
    try {
        const res = await fetch(`${baseUrl}/auth/register`, {
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
            localStorage.setItem('uauth', JSON.stringify(responseData));
        }

        return responseData;
    } catch (error) {
        console.error(error);
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

        if (responseData?.data?.user?.role === 'seller') {
            localStorage.setItem('sauth', JSON.stringify(responseData));
        }
        else if (responseData?.data?.user?.role === 'user') {
            localStorage.setItem('uauth', JSON.stringify(responseData));
        } else {
            throw error;
        }

        return responseData;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export {
    sellerSignupMutation,
    userSignupMutation,
    userLoggedIn
}