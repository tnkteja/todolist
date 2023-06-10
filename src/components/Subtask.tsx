import React, {useState} from 'react'
import Item from './Item';

function Subtask(props:any) {
    const [complete, setComplete] = useState(props.complete);
    const change = (e:any)=>{
        let {checked}=e.target;
        setComplete(checked)
    }
  return (
    <div>
        <input type="checkbox" onChange={change}></input>&nbsp;&nbsp;
        <label><Item complete={complete} task={props.subtask}></Item></label>
    </div>
  )
}

export default Subtask