const API_DOMAIN = "http://localhost:3008/"

export const get = async (patch) => {
    const response = await fetch(API_DOMAIN + patch)
    const resuft = await response.json()
    return resuft
}

export const pots = async (patch, option) => {
    const response = await fetch(API_DOMAIN + patch, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(option)
    })
    const resuft = await response.json()
    return resuft
}

export const patch = async (patch, option) => {
    const response = await fetch(API_DOMAIN + patch, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(option)
    })
    const resuft = await response.json()
    return resuft
}

export const del = async (patch) => {
    const response = await fetch(API_DOMAIN + patch, {
        method: "DELETE"
    })
    const resuft = await response.json()
    return resuft
}