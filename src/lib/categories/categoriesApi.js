import { baseUrl } from "../api/baseUrl";

const getAllCategory = async () => {
    const res = await fetch(`${baseUrl}/category`,
        {
            cache: 'force-cache'
        })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


export {
    getAllCategory
}