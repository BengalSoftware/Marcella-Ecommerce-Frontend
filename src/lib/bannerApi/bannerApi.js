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


export {
    getDesktopBanner
}
