import { get } from "../utils/request"

export const getCategoryService = async () => {
    const result = await get("category")
    return result
}