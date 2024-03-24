import { baseUrl } from "../api/baseUrl";

const getFlashSaleOffer = async () => {
    try {
        const res = await fetch(`${baseUrl}/flashSale-offer`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};


const getFlashSaleOfferType = async () => {
    try {
        const res = await fetch(`${baseUrl}/flashSale-types`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};

const getFlashSaleProduct = async (offer) => {
    try {
        const res = await fetch(`${baseUrl}/product/flashProduct?&flashStatus=${offer}`)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    } catch (error) {
        console.error(error)
    }
};


export {
    getFlashSaleOffer,
    getFlashSaleProduct,
    getFlashSaleOfferType
}
