import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { setAuthToken } from '../AuthToken';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const changeEmail = (e:any)=>{
        setEmail(e.target.value)
    }

    const changePassword = (e:any)=>{
        setPassword(e.target.value)
    }

    const login = ()=>{
        const loginPayload = {
            email: "eve.holt@reqres.in",
            password
          }
        
          axios.post("https://reqres.in/api/login", loginPayload)
            .then(response => {
              //get token from response
              const token  =  response.data.token;
        
              //set JWT token to local
              localStorage.setItem("token", token);
        
              //set token to axios common header
              setAuthToken(token);
              console.log("hello")
        
                //redirect user to home page
              window.location.href = '/'
            })
            .catch(err => console.log(err));
    }

  return (
    <div style={{ 
        padding: "10px",
        width:"250px", 
        textAlign:"left", 
        border:"1px solid skyblue",
        position: "relative",
        left: "42%"
        }}>
        {/* <input type="text" placeholder="Email" value={email} onChange={changeEmail}></input> */}
        <h1>Login</h1>
        <Form>
            <Form.Group>
                <Form.Control
                type="text"
                aria-describedby="passwordHelpBlock"
                placeholder="Email"
                value={email} onChange={changeEmail}
            />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder="Password"
                value={password} onChange={changePassword}
            />
            </Form.Group>
        </Form>
        {/* <input type="password" placeholder="Password" value={password} onChange={changePassword}></input> */}
        <br></br>
        <Button variant="info" onClick={login}>Login</Button>
    </div>
  )
}

export default Login