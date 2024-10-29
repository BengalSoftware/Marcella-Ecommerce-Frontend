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
// get all order by user email
const getAllDeliveryOrderByQuery = async (query) => {
    try {
        const res = await fetch(`${baseUrl}/order?page=1&status=Delivered`,
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

// order report by user email
const orderReportMutation = async (data) => {
    try {
        const res = await fetch(`${baseUrl}/report`,
            {
                method: 'POST',
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



// get single order by id 
const getSingleOrderById = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/order/${id}`,
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
    getAllOrderByQuery,
    orderReportMutation,
    getSingleOrderById,
    getAllDeliveryOrderByQuery
}