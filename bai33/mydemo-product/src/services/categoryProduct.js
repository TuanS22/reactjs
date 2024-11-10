import { get } from "../utils/response"

export const getCategoryService = async () => {
    const resuft = await get(`category`)
    return resuft
}