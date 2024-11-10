const init = [
    {
        id: 1,
        content: "JavaScript",
        completed: true
    },
    {
        id: 2,
        content: "C#",
        completed: false
    },
    {
        id: 3,
        content: "ReactJS",
        completed: false
    },
]

export const todosReducer = (state = init, action) => {
    let newTodo = [...state]
    switch (action.type) {
        case "create":
            newTodo = [
                ...newTodo,
                {
                    id: Date.now(),
                    content: action.content,
                    completed: false
                }
            ]
            return newTodo
        case "completed":
            const indexComplete = newTodo.findIndex(item => {
                return item.id === action.id
            })
            newTodo[indexComplete].completed = true
            return newTodo
        case "undo":
            const indexUndo = newTodo.findIndex(item => {
                return item.id === action.id
            })
            newTodo[indexUndo].completed = false
            return newTodo
        case "delete": 
            newTodo = newTodo.filter(item => {
                return item.id !== action.id
            })
            return newTodo
        default:
            return state
    }
}