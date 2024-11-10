const init = [
    {
        id: 1,
        content: "C#",
        completed: true
    },
    {
        id: 2,
        content: "PHP",
        completed: false
    },
    {
        id: 3,
        content: "Python",
        completed: false
    },
    {
        id: 4,
        content: "ReactJS",
        completed: true
    }
]

export const todoReducer = (state = init, action) => {
    let newState = [...state]
    switch (action.type) {
        case "create":
            newState = [
                ...state,
                {
                    id: Date.now(),
                    content: action.content,
                    completed: false
                }
            ]
            return newState
        case "completed":
            const indexCompleted = newState.findIndex(item => {
                return (item.id === action.id)
            })
            newState[indexCompleted].completed = true
            return newState
        case "undo":
            const indexUndo = newState.findIndex(item => {
                return (item.id === action.id)
            })
            newState[indexUndo].completed = false
            return newState
        case "delete":
            newState = newState.filter(item => {
                return (item.id !== action.id)
            })
            return newState
        default:
            return state
    }
}