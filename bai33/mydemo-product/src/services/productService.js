import { del, get, patch, pots } from "../utils/response"

export const getProductService = async () => {
    const resuft = await get("products")
    return resuft
}

export const createProductService = async (option) => {
    const resuft = await pots("products", option)
    return resuft
}

export const editProductService = async (id, option) => {
    const resuft = await patch(`products/${id}`, option)
    return resuft
}

export const deleteProductService = async (id) => {
    const resuft = await del(`products/${id}`)
    return resuft
}