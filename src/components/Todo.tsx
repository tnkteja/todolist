import React, {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import { Form, Button} from "react-bootstrap"
import Subtask from "./Subtask"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from './Item';


function Todo(props:any) {

    const [subtask, setSubtask] = useState('')
    const [subtasks, setSubtasks] = useState(props.subtasks || [])
    const [complete, setComplete] = useState(props.complete)

    const change= (e:any)=>{
        setSubtask(e.target.value)
    }

    const addSubtask = ()=>{
        const newSubtasks = [...subtasks]
        newSubtasks.push(subtask)
        setSubtasks(newSubtasks)
        setSubtask('')
    }

    const changeComplete = (e:any)=>{
        const {checked} = e.target
        setComplete(checked)

    }
  return (
    <Accordion.Item eventKey={props.name}>
        <Accordion.Header>
            <label><Item complete={complete} task={props.name}></Item></label>
        </Accordion.Header>
        <Accordion.Body>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Check type="checkbox" label={"Mark as complete"} onChange={changeComplete}></Form.Check>
                    </Form.Group>
                </Col>
            </Row>
            <Container>
            </Container>
            <br></br>
            <ListGroup>
                {subtasks.map( (subtask:any) => <ListGroup.Item><Subtask subtask={subtask}></Subtask></ListGroup.Item>)}
            </ListGroup>
            <Form.Control type="text" value={subtask} onChange={change}></Form.Control>
            <br></br>
                    <Button variant="primary" onClick={addSubtask}>Add Subtask</Button>
        </Accordion.Body>
    </Accordion.Item>
  )
}

export default Todo