import { baseUrl } from "../api/baseUrl";

const getDesktopBanner = async () => {
    try {
        const res = await fetch(`${baseUrl}/desktopBanner`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};


const getSingleDesktopBanner = async (slug) => {
    try {
        const res = await fetch(`${baseUrl}/desktopBanner/${slug}`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};

export {
    getDesktopBanner,
    getSingleDesktopBanner
}
