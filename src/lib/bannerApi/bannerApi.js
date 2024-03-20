import { baseUrl } from "../api/baseUrl";

const getDesktopBanner = async () => {
    const res = await fetch(`${baseUrl}/desktopBanner`, {
        cache: 'force-cache'
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


const getSingleDesktopBanner = async (slug) => {
    try {
        const res = await fetch(`${baseUrl}/desktopBanner/${slug}`, {
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
    getDesktopBanner,
    getSingleDesktopBanner
}
