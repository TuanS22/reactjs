import { post } from "../utils/response"

export const postCrush = async (option) => {
    const result = await post("crush", option)
    return result
}
