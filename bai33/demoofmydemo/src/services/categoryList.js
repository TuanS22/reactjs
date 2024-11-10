import { get } from "../utils/response"

export const getCategoryService = async () => {
    const result = await get("category")
    return result
}