import { baseUrl } from "../api/baseUrl";
import Cookies from 'js-cookie';

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

        // Set data in cookies
        Cookies.set('sellerData', JSON.stringify(responseData), { expires: 7 }); // Expires in 7 days

        return responseData;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};


const getSellerFromCookies = () => {
    const seller = Cookies.get('sellerData');
    return JSON.parse(seller)
}

export {
    sellerSignupMutation,
    getSellerFromCookies
}