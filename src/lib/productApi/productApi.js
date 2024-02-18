import { baseUrl } from "../api/baseUrl";

const getProductByProductType = async (productType) => {
    const res = await fetch(`${baseUrl}/product/productType/${productType}`,
        {
            cache: 'force-cache'
        })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


export {
    getProductByProductType
}
