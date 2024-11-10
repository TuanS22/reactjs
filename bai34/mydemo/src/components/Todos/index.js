import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { completeTodos, createTodos, deleteTodos, undoTodos } from '../../actions/todos';
import "./Todo.css"

function Todos(props) {
    const todo = useSelector(state => state.todosReducer)
    const dispatch = useDispatch()
    const inputRef = useRef()

    const handleSubmid = (e) => {
        e.preventDefault()
        if (e.target[0].value !== "") {
            dispatch(createTodos(e.target[0].value))
            inputRef.current.value = ""
            inputRef.current.focus()
        }
    }

    const handleCompleted = (id) => {
        dispatch(completeTodos(id))
    }

    const handleUndo = (id) => {
        dispatch(undoTodos(id))
    }

    const handleDelete = (id, completed) => {
        if (completed !== true) {
            dispatch(deleteTodos(id))
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmid}>
                    <div>
                        <input ref={inputRef} />
                        <button type='submit'>+</button>
                    </div>
                    <div>
                        {todo && (
                            <ul>
                                {todo.map((item) => (
                                    <li key={item.id}>
                                        <span className={'todo--content ' + (item.completed && 'todo--completed')}>{item.content}</span>
                                        {item.completed ? (
                                            <button onClick={() => handleUndo(item.id)}>U</button>
                                        ) : (
                                            <button onClick={() => handleCompleted(item.id)}>V</button>
                                        )}
                                        <button onClick={() => handleDelete(item.id, item.completed)}>X</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}

export default Todos;