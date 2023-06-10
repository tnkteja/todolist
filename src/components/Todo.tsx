import React, {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Subtask from "./Subtask"

function Todo(props:any) {

    const [subtask, setSubtask] = useState('')
    const [subtasks, setSubtasks] = useState(props.subtasks || [])

    const change= (e:any)=>{
        setSubtask(e.target.value)
    }

    const addSubtask = ()=>{
        const newSubtasks = [...subtasks]
        newSubtasks.push(subtask)
        setSubtasks(newSubtasks)
        setSubtask('')
    }
  return (
    <Accordion.Item eventKey={props.name}>
        <Accordion.Header>
            <label>{props.name}</label>
        </Accordion.Header>
        <Accordion.Body>
            <div>
                <label>Mark as complete</label>
                <input type="checkbox"></input>
            </div>
            <input type="text" value={subtask} onChange={change}></input>
            <button onClick={addSubtask}>Add Subtask</button>
            <ListGroup>
                {subtasks.map( (subtask:any) => <ListGroup.Item><Subtask subtask={subtask}></Subtask></ListGroup.Item>)}
            </ListGroup>
        </Accordion.Body>
    </Accordion.Item>
  )
}

export default Todo