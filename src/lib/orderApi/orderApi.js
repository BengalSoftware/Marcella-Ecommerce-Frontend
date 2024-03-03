const { baseUrl, token } = require("../api/baseUrl");

// get all order by user email
const getAllOrderByQuery = async (query) => {
    try {
        const res = await fetch(`${baseUrl}/order?page=1&status=Pending`,
            {
                headers: {
                    'Authorization': token,
                }
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
    getAllOrderByQuery
}