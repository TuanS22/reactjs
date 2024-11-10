import { del, get, patch, post } from "../utils/response"

export const getProductService = async () => {
    const result = get("products")
    return result
}

export const createProductService = async (option) => {
    const result = await post("products", option)
    return result
}

export const editProductService = async (id, option) => {
    const result = await patch(`products/${id}`, option)
    return result
}

export const deleteProductService = async (id) => {
    const result = await del(`products/${id}`, {
        method: "DELETE"
    })
    return result
}