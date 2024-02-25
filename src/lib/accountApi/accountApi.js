import { baseUrl } from "../api/baseUrl";

// get single user
const getSingelUser = async (email) => {
    const res = await fetch(`${baseUrl}/user/${email}`
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


// update single user
const updateUserMutation = async (email, data) => {
    const res = await fetch(`${baseUrl}/user/updateProfile/${email}`,
        {
            method: 'PUT',
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

export {
    getSingelUser
}