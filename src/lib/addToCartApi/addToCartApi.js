import { baseUrl } from "../api/baseUrl";

// get add to cart
const getCartDataByEmail = async (email) => {
    const res = await fetch(`${baseUrl}/cart/myCart/${email}`
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


// add to cart
const addToCartDataByEmail = async (email, data) => {
    const res = await fetch(`${baseUrl}/cart/cartAdd/${email}`,
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


// delete cart data
const deleteCardDataByEmailId = async (email, cartId) => {
    const res = await fetch(`${baseUrl}/cart/cartEdit/${email}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartId),
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};

export {
    getCartDataByEmail,
    addToCartDataByEmail,
    deleteCardDataByEmailId
}