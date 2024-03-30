import { baseUrl } from "../api/baseUrl";

const getAllCategory = async () => {
    try {
        const res = await fetch(`${baseUrl}/category`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};



// get all brand 
const getAllBrands = async () => {
    try {
        const res = await fetch(`${baseUrl}/manufacturer`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};


export {
    getAllCategory,
    getAllBrands
}
