const { baseUrl } = require("../api/baseUrl");

// get layout by email
const getSelectedLayoutByEmail = async (email) => {
    try {
        const res = await fetch(`${baseUrl}/layout/${email}`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json();
    } catch (error) {
        console.error(error)
    }
};

// post and update layout
const createAndUpdateLayoutMutation = async (email, data) => {
    try {
        const res = await fetch(`${baseUrl}/layout/${email}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
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
    createAndUpdateLayoutMutation
}