export const createTodo = (content) => {
    return {
        type: "create",
        content: content
    }
}

export const completeTodo = (id) => {
    return {
        type: "complete",
        id: id
    }
}

export const undoTodo = (id) => {
    return {
        type: "undo",
        id: id
    }
}

export const deleteTodo = (id) => {
    return {
        type: "delete",
        id: id
    }
}