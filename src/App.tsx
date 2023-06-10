import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import { UserProvider } from './userContext';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const token = window.localStorage.getItem("token")
  const isAuthenticated = Boolean(token)
  
  let tasks:any = window.localStorage.getItem("tasks")
  if(!tasks) {
      tasks = [
          {
              name: "todo1",
              complete: false,
              subtasks: []
          },
          {
              name: "todo2",
              complete: false,
              subtasks: [{
                task: "subtask1",
                complete: false
              }]
          }
      ]
      window.localStorage.setItem("tasks", JSON.stringify(tasks))
  } else {
      tasks = JSON.parse(tasks);
  }
   console.log(tasks)
  return (
  <UserProvider value={{
    authenticated:isAuthenticated?"authenticated":'',
    tasks: isAuthenticated? tasks: []
    }}>
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
