import { baseUrl } from "../api/baseUrl";

const getFlashSaleOffer = async () => {
    const res = await fetch(`${baseUrl}/flashSale-offer`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


const getFlashSaleOfferType = async () => {
    const res = await fetch(`${baseUrl}/flashSale-types`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};

const getFlashSaleProduct = async (offer) => {
    const res = await fetch(`${baseUrl}/product/flashProduct?&flashStatus=${offer}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
};


export {
    getFlashSaleOffer,
    getFlashSaleProduct,
    getFlashSaleOfferType
}
