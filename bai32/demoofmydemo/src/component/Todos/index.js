import React, { useEffect, useReducer, useRef } from 'react';

const course = [
    {
        id: 1,
        title: "Java Developer"
    },
    {
        id: 2,
        title: "C# Developer"
    },
    {
        id: 3,
        title: "ReactJS Developer"
    },
    {
        id: 4,
        title: "JavaScipt Developer"
    }
]

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "create":
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.title
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
    const [todos, dispatch] = useReducer(reducer, course)
    const inputValue = useRef()

    useEffect(() => {
        inputValue.current.focus()
    })

    const handleAddTodo = (e) => {
        console.log(e)
        e.preventDefault()
        dispatch({
            type: "create",
            title: e.target[0].value
        })
        inputValue.current.value = ""
    }

    const handleDelTodo = (id) => {
        dispatch({
            type: "delete",
            value: id
        })
    }

    console.log(todos)

    return (
        <>
            <form onSubmit={handleAddTodo}>
                <input ref={inputValue} />
                <button>Add</button>
            </form>
            <div>
                <ul>
                    {todos.map((item) => {
                        return (
                            <li key={item.id}>
                                <span>{item.title}</span>
                                <button onClick={() => handleDelTodo(item.id)}>Del</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}

export default Todos;