import { baseUrl } from "../api/baseUrl";

// create address
const createAddressMutation = async (email, data) => {
    const res = await fetch(`${baseUrl}/address/${email}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            cache: 'force-cache'
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


// get all address
const getAllAddressByEmail = async (email) => {
    const res = await fetch(`${baseUrl}/address/all/${email}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


// update single address
const updateSingleAddress = async (addressId) => {
    const res = await fetch(`${baseUrl}/address/${addressId}`,
        {
            cache: 'force-cache'
        })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


// delete single address
const deleteSingelAddress = async (email) => {
    const res = await fetch(`${baseUrl}/address/${email}`,
        {
            cache: 'force-cache'
        })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


export {
    createAddressMutation,
    getAllAddressByEmail,
    updateSingleAddress,
    deleteSingelAddress
}
