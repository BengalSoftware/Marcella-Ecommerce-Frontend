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

        return res.json();
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

export {
    sellerSignupMutation
}