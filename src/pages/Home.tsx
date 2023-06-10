import React, {useContext, useEffect} from 'react'
import TodoList from '../components/TodoList'
import { setAuthToken } from '../AuthToken'
import {UserContext} from "../userContext"
import { useNavigate } from "react-router-dom";
import { Button} from "react-bootstrap"


function Home() {

    const {authenticated, tasks} = useContext(UserContext);
    const navigate = useNavigate()
    
    
    useEffect(()=>{
        if(authenticated !== "authenticated"){
        navigate("login")
    }
    },[authenticated])
    
    const logout = ()=>{
        setAuthToken('')
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("tasks")
        navigate("login")
    }

  return (
    <div style={{padding:"10%"}}>
        <h1>Dashboard
            <Button style={{float:"right"}} variant="danger" onClick={logout}>Logout</Button>
        </h1>
        <br></br>
        <TodoList
        tasks={tasks}
        ></TodoList>
    </div>
  )
}

export default Home