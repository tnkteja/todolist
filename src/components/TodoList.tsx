import React, { useState } from 'react'
import Todo from './Todo'
import { Accordion, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

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
        <Accordion>
            {
                toDoList.map( (toDo: any) => <Todo {...toDo}></Todo> )
            }
        </Accordion>
        <div>
            <Form.Control type="text" value={name} onChange={change} placeholder='Enter to do item here...'></Form.Control>
            <br></br>
            <Button variant="info" onClick={addToDo}>Add todo</Button>
        </div>
    </div>
  )
}

export default TodoList