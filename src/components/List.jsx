import { useContext } from 'react';
import { ToDoContext } from "./context"
import { ToDoItem } from "./ToDoItem"

export const List = () => {
    const {todos, onRemove, onUpdate, currentFilter} = useContext(ToDoContext)

    let filtered = todos
    if(currentFilter == 'active'){
        filtered = todos.filter(a => !a.completed) 
    } else if(currentFilter == 'completed'){
        filtered = todos.filter(a => a.completed)
    }

    return <>
        <p className='showing'>showing: <strong>{currentFilter}</strong></p>
        {
            filtered.map(todo => <ToDoItem key={todo.id} 
                                         todo={todo} 
                                         onUpdate ={onUpdate}
                                         onRemove= {onRemove}
                                         />)
        }
    </>
}

