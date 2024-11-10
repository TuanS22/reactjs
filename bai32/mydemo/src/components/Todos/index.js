import React, { useReducer, useRef, useEffect } from 'react';

const init = [
    {
        id: 1,
        content: "Lập trình JS"
    },
    {
        id: 2,
        content: "Lập trình .Net"
    },
    {
        id: 3,
        content: "Lập trình Java"
    },
    {
        id: 4,
        content: "Lập trình PHP"
    }
]

const reducer = (state, action) => {
    switch (action.type) {
        case "create":
            return [
                ...state,
                {
                    id: Date.now(),
                    content: action.value
                }
            ]
        case "delete":
            const newState = state.filter(todo => todo.id !== action.value)
            return newState
        default:
            return state
    }
}

function Todos(props) {
    const [todos, dispatch] = useReducer(reducer, init)
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const handleAddList = (e) => {
        e.preventDefault()
        const value = e.target.elements[0].value
        dispatch({
            type: "create",
            value: value
        })
        inputRef.current.value = ""
    }

    const handleDel = (id) => {
        // console.log(id)
        dispatch({
            type: "delete",
            value: id,
        })
    }

    return (
        <>
            {todos.length > 0 && (
                <ul>
                    {todos.map((item) => {
                        return (
                            <li key={item.id}>
                                <span>{item.content}</span>
                                <button onClick={() => handleDel(item.id)}>Del</button>
                            </li>
                        )
                    })}
                </ul>
            )}
            <form onSubmit={handleAddList}>
                <input ref={inputRef} />
                <button>Add</button>
            </form>
        </>
    );
}

export default Todos;