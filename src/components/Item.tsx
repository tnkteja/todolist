import React from 'react'

function Item(props:any) {
  if(props.complete) {
    return (
    <s>{props.task}</s>
    )
  } 
    return props.task
}

export default Item