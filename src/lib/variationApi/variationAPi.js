import { baseUrl } from "../api/baseUrl";

const getAllSize = async () => {
    try {
        const res = await fetch(`${baseUrl}/size`,
            {
                cache: 'force-cache'
            })

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};



// get all brand 
const getAllColor = async () => {
    try {
        const res = await fetch(`${baseUrl}/color`,
            {
                cache: 'force-cache'
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
    getAllSize,
    getAllColor
}
