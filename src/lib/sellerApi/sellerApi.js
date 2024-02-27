import { baseUrl } from "../api/baseUrl";

const getSingleSeller = async (email) => {
    const res = await fetch(`${baseUrl}/auth/seller/${email}`, {
        method: 'POST',
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


export {
    getSingleSeller
}
