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
const updateSingleAddress = async (addressId, data) => {
    const res = await fetch(`${baseUrl}/address/${addressId}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


// delete single address
const deleteSingelAddress = async (email, id) => {
    const res = await fetch(`${baseUrl}/address/${email}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


// active single address
const activeSingleAddress = async (userId, id) => {
    const res = await fetch(`${baseUrl}/address/active/${userId}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


export {
    createAddressMutation,
    getAllAddressByEmail,
    updateSingleAddress,
    deleteSingelAddress,
    activeSingleAddress
}
