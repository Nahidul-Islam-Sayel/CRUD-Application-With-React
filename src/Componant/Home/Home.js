import React, { useContext } from 'react';
import { Button , Table } from 'react-bootstrap';
import { UserContext } from '../Context/Context';
import './Home.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Home = () => {
    const [users, setUser] = useContext(UserContext);
    console.log(users);
    return (
        <div class="box">
        <Link to="/Create"><Button variant="primary">Create New</Button></Link>   
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Position</th>
      <th>Selary</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
    users.map(users=>
      <tr>
      <td>{users.id}</td>
      <td>{users.name}</td>
      <td>{users.position}</td>
      <td>{users.salary}</td>
      <td> 
      <Link to={"/read/"+users.id}>
        <Button variant="success" className="Actio_Info">READ</Button>
        </Link>
        <Link to={"/edit/"+users.id}>  
         <Button variant="warning" className="Actio_Info">EDIT</Button>
         </Link>
      <Link to={"/delete/"+users.id}>
        <Button variant="danger" className="Actio_Info">DELETE</Button>
        </Link>
      </td>
    </tr>
    )}
   
   
  </tbody>
</Table>
        </div>
    );
};

export default Home;