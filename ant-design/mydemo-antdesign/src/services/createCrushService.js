import { del, get, post } from "../utils/response"

export const postCreateCrush = async (option) => {
    const result = await post("create-crush", option)
    return result
}

export const getCreateCrush = async () => {
    const result = await get("create-crush")
    return result
}

export const deleteCrush = async (id) => {
    const result = await del(`create-crush/${id}`)
    return result
}