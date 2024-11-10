const init = [
    {
        id: 1,
        content: "Công việc 1",
        completed: true
    },
    {
        id: 2,
        content: "Công việc 2",
        completed: false
    },
    {
        id: 3,
        content: "Công việc 3",
        completed: false
    }
]

export const todosReducer = (state = init, action) => {
    let newState = [...state]
    // console.log(state, action);
    switch (action.type) {
        case "create":
            newState = [
                ...newState,
                {
                    id: Date.now(),
                    content: action.content,
                    completed: false
                }
            ]
            return newState
        case "complete":
            const itemComplete = newState.findIndex(item => {
                return item.id === action.id
            })
            newState[itemComplete].completed = true
            return newState
        case "undo":
            const itemUndo = newState.findIndex(item => {
                return item.id === action.id
            })
            newState[itemUndo].completed = false
            return newState
        case "delete":
            newState = newState.filter(item => {
                return item.id !== action.id
            })
            return newState
        default:
            return state
    }
}