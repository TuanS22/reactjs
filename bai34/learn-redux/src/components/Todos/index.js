import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completeTodo, createTodo, deleteTodo, undoTodo } from '../../actions/todos';
import "./Todo.css"

function Todos(props) {
    const todoList = useSelector(state => state.todosReducer)
    // console.log(todoList)
    const dispatch = useDispatch()
    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (e.target[0].value !== "") {
            dispatch(createTodo(e.target[0].value))
            inputRef.current.value = "";
            inputRef.current.focus();
        }
    }

    const handleComplete = (id) => {
        dispatch(completeTodo(id))
    }

    const handleUndo = (id) => {
        dispatch(undoTodo(id))
    }

    const handleDelete = (id, completed) => {
        if (completed === false) {
            dispatch(deleteTodo(id))
        }
    }

    return (
        <>
            <div className=''>
                <form onSubmit={handleSubmit}>
                    <input ref={inputRef} name='content' />
                    <button type='submit' >+</button>
                </form>
                <div>
                    {todoList && (
                        <div>
                            {todoList.map((item) => {
                                return (
                                    <div style={{ display: "flex" }} key={item.id}>
                                        <div className={'todo--content ' + (item.completed && 'todo--completed')}>{item.content}</div>
                                        {item.completed ? (
                                            <button onClick={() => handleUndo(item.id)}>U</button>
                                        ) : (
                                            <button onClick={() => handleComplete(item.id)}>V</button>
                                        )}
                                        <button onClick={() => handleDelete(item.id, item.completed)}>X</button>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Todos;