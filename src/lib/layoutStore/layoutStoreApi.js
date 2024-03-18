const { baseUrl } = require("../api/baseUrl");

// get layout by email
const getSelectedLayoutByEmail = async (email) => {
    try {
        const res = await fetch(`${baseUrl}/store-layout/${email}`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json();
    } catch (error) {
        console.error(error)
    }
};

// post store layout
const createStoreLayoutWithProduct = async (email, formData) => {
    try {
        const res = await fetch(`${baseUrl}/store-layout/${email}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};


export {
    getSelectedLayoutByEmail,
    createStoreLayoutWithProduct
}