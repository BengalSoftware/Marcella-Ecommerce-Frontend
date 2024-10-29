import { baseUrl } from "../api/baseUrl";

// create address
const createAddressMutation = async (email, data) => {
    try {
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
    } catch (error) {
        console.error(error)
    }
};


// get all address
const getAllAddressByEmail = async (email) => {
    try {
        const res = await fetch(`${baseUrl}/address/all/${email}`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};


// update single address
const updateSingleAddress = async (addressId, data) => {
    try {
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
    } catch (error) {
        console.error(error)
    }
};


// delete single address
const deleteSingelAddress = async (email, id) => {
    try {
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
    } catch (error) {
        console.error(error)
    }
};


// active single address
const activeSingleAddress = async (userId, id) => {
    try {
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
    } catch (error) {
        console.error(error)
    }
};


// get active single address 
const getActiveSingleAddress = async (email) => {
    try {
        const res = await fetch(`${baseUrl}/address/active/${email}`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};

export {
    createAddressMutation,
    getAllAddressByEmail,
    updateSingleAddress,
    deleteSingelAddress,
    activeSingleAddress,
    getActiveSingleAddress
}
