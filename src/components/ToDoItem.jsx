import { useContext } from 'react';

export const ToDoItem = ({ todo, onUpdate, onRemove }) => {
    return <div className={"todo" + (todo.completed ? ' done' : '')}>
        <p>{todo.text}</p>
        <button onClick={() => onRemove(todo.id)}>delete</button>
        <button onClick={() => onUpdate(todo.id)}>{todo.completed ? 'cancel' : 'completed'}</button>
    </div>
}

//google styling guide for JS