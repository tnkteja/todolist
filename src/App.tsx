import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo"
import TodoList from './components/TodoList';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import { UserProvider } from './userContext';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const token = window.localStorage.getItem("token")
  const isAuthenticated = Boolean(token)
  return (
  <UserProvider value={isAuthenticated?"authenticated":''}>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ToDoLists</Navbar.Brand>
        </Container>
      </Navbar>
      <br></br>
    <Routes>
      <Route path="/" element={ 
        <Home></Home>
      }></Route>
      <Route path="login" element={ <Login></Login>}></Route>
    </Routes>
    </UserProvider>
  );
}

export default App;
