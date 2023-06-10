import React from 'react'

function Subtask(props:any) {
  return (
    <div>
        <input type="checkbox"></input>&nbsp;&nbsp;
        <label>{props.subtask}</label>
    </div>
  )
}

export default Subtask