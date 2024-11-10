import { get } from "../utils/response"

export const getProductService = async () => {
    const result = await get("products")
    return result
}