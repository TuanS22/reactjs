export const createTodos = (content) => {
    return {
        type: "create",
        content: content
    }
}

export const completeTodos = (id) => {
    return {
        type: "completed",
        id: id
    }
}

export const undoTodos = (id) => {
    return {
        type: "undo",
        id: id
    }
}

export const deleteTodos = (id) => {
    return {
        type: "delete",
        id: id
    }
}