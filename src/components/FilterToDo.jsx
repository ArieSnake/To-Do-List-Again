import { useContext } from 'react';
import { ToDoContext } from "./context"

export const FilterToDo = () => {
    const { onFilter, currentFilter } = useContext(ToDoContext)
    const list = ['all', 'completed', 'active']
    return <>
        {
            list.map((criteria, i) => <button key={i}
                className={currentFilter == criteria ? 'button-active' : null}
                onClick={() => onFilter(criteria)}>
                {criteria}
            </button>)
        }

    </>
}