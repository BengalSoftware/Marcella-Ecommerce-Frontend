const { baseUrl, token } = require("../api/baseUrl");

// get all reports by user email
const getAllReportsByQuery = async () => {
    try {
        const res = await fetch(`${baseUrl}/report`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};


export {
    getAllReportsByQuery
}