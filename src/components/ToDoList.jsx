import { useContext } from 'react';

import { useState } from "react"
import { AddToDo } from "./AddToDo"
import { List } from "./List"
import { FilterToDo } from "./FilterToDo"
import { ToDoContext } from "./context"


export const ToDoList = () => {
    const [todos, setTodos] = useState([
        { id: 101, text: 'Go for a walk', completed: false },
        { id: 102, text: 'Have a coffe', completed: true },
        { id: 103, text: 'Do workout', completed: false }

    ])
    const [currentFilter, setCurrentFilter] = useState('all')

    const handleRemove = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }


    const handleAdd = text => {
        setTodos([...todos, { text, completed: false, id: Date.now() }])
    }

    const handleUpdate = id => {
        setTodos(todos.map(todo =>
            todo.id != id ? todo : { ...todo, completed: !todo.completed }
        ))
    }

    return <>
        <ToDoContext.Provider value={{ todos, currentFilter, onFilter: setCurrentFilter, onTodos: setTodos, onRemove: handleRemove, onAdd: handleAdd, onUpdate: handleUpdate }}>
            <AddToDo
            />
            <FilterToDo
            />
            <List
            />
        </ToDoContext.Provider>
    </>
}