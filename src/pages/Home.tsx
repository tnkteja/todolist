import React, {useContext} from 'react'
import TodoList from '../components/TodoList'
import { setAuthToken } from '../AuthToken'
import {UserContext} from "../userContext"
import { useNavigate } from "react-router-dom";


function Home() {

    const authenticated = useContext(UserContext);
    const navigate = useNavigate()
    if(authenticated !== "authenticated"){
        navigate("login")
    }
    const logout = ()=>{
        setAuthToken('')
        window.localStorage.removeItem("token")
        navigate("login")
    }

  return (
    <div>
        <h1>Dashboard</h1>
        <div>
            <button onClick={logout}>Logout</button>
        </div>
        <TodoList
        tasks={[
            {
            name: "todo1",
            subtasks: []
            },
            {
            name: "todo2",
            subtasks: ["subtask1"]
            }
        ]}
        ></TodoList>
    </div>
  )
}

export default Home