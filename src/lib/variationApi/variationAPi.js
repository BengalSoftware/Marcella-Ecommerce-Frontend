import { baseUrl } from "../api/baseUrl";

const getAllSize = async () => {
    const res = await fetch(`${baseUrl}/size`,
        {
            cache: 'force-cache'
        })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};



// get all brand 
const getAllColor = async () => {
    const res = await fetch(`${baseUrl}/color`,
        {
            cache: 'force-cache'
        })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


export {
    getAllSize,
    getAllColor
}
