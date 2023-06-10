import React, { useState } from 'react'
import Todo from './Todo'
import { Accordion } from 'react-bootstrap'

function TodoList(props:any):any {
    const [name, setName] = useState('')
    const [toDoList, setToDoList] = useState(props.tasks || [])

    const change = (e:any) => {
        setName(e.target.value)
    }
    const addToDo = (e:any)=>{
        const newToDoList = [...toDoList]
        newToDoList.push({
            name,
            subtasks: []
        })
        setToDoList(newToDoList)
        setName('')
    }
  return (
    <div>
        <div>
            <input type="text" value={name} onChange={change}></input>
            <button onClick={addToDo}>Add todo</button>
        </div>
        <Accordion>
            {
            toDoList.map( (toDo: any) => <Todo {...toDo}></Todo> )
            }
        </Accordion>
    </div>
  )
}

export default TodoList