import { baseUrl } from "../api/baseUrl";

const getSingleSeller = async (email) => {
    const res = await fetch(`${baseUrl}/auth/seller?email=${email}`, {
        method: 'POST',
        cache: 'force-cache',
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


export {
    getSingleSeller
}
