import { baseUrl } from "../api/baseUrl";

// get all product 
const getAllProduct = async () => {
    const res = await fetch(`${baseUrl}/product`,
        {
            cache: 'force-cache'
        })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


// get product type 
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


// get single product 
const getSingleProduct = async (slug) => {
    const res = await fetch(`${baseUrl}/product/${slug}`,
        {
            cache: 'force-cache'
        })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


// get related product 
const getRelatedProduct = async (slug) => {
    const res = await fetch(`${baseUrl}/product/related-products/${slug}`,
        {
            cache: 'force-cache'
        })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};



export {
    getAllProduct,
    getProductByProductType,
    getSingleProduct,
    getRelatedProduct
}
