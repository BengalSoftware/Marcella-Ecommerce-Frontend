const { baseUrl, token } = require("../api/baseUrl");

// post wishlist by user email
const addWishlistProductByEmail = async (email, data) => {
    try {
        const res = await fetch(`${baseUrl}/wishlist/${email}`,
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



// get wishlist by user email
const getWishlistByUserEmail = async (email) => {
    try {
        const res = await fetch(`${baseUrl}/wishlist/${email}`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json();
    } catch (error) {
        console.error(error)
    }
};



// delete wishlist product by email 
const deleteWishlistProductByEmail = async (email, data) => {
    try {
        const res = await fetch(`${baseUrl}/wishlist/${email}`,
            {
                method: 'DELETE',
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

export {
    addWishlistProductByEmail,
    getWishlistByUserEmail,
    deleteWishlistProductByEmail
}