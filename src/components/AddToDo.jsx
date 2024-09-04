import { useContext } from 'react';

import { useState } from "react"
import { ToDoContext } from "./context"

export const AddToDo = () => {
    const { onAdd } = useContext(ToDoContext)

    const [text, setText] = useState('')
    const handleSubmit = event => {
        event.preventDefault()
        if (text.trim()) {
            onAdd(text)
            setText('')
        }
    }
    return <>
        <h2 className='heading-todo'>What Will you Accomplish Today?</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                placeholder='write here what to add'
                onChange={event => setText(event.target.value)}
            />
            <button>submit</button>
        </form>
    </>
}