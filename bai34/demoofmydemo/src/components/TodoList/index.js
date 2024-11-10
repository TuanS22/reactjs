import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, createTodo, deleteTodo, undoTodo } from '../../actions/todo';
import "./Todo.css"

function Todos(props) {
    const todoList = useSelector(state => state.todoReducer)
    const dispatch = useDispatch()
    const inputRef = useRef()
    console.log(todoList)

    const handleSubmidCreate = (e) => {
        e.preventDefault()
        dispatch(createTodo((e.target[0].value)))
        inputRef.current.value = ""
        inputRef.current.focus()
    }

    const handleComplete = (id) => {
        dispatch(completeTodo(id))
    }

    const handleUndo = (id) => {
        dispatch(undoTodo(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmidCreate}>
                    <input ref={inputRef} />
                    <button type='submit'>+</button>
                </form>
                <div>
                    <div>
                        <table>
                            <thead>
                                {todoList.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td><p className={'todo--content ' + (item.completed && 'todo--complete')}>{item.content}</p></td>
                                            <td>
                                                {item.completed ? (
                                                    <button onClick={() => handleUndo(item.id)}>U</button>
                                                ) : (
                                                    <div>
                                                        <button onClick={() => handleComplete(item.id)}>V</button>
                                                        <button onClick={() => handleDelete(item.id)}>X</button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todos;