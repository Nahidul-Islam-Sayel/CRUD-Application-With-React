import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../Context/Context';
import './Read.css'
const Read = () => {
    const{id}= useParams();
    const [users, setUser] = useContext(UserContext);
    const newuser = users.filter((user)=>user.id==id)
    return (
        <div className="read">
            <h3>ID : {newuser[0].id}</h3>
            <h3>Name : {newuser[0].name}</h3>
            <h3>Position : {newuser[0].position}</h3>
            <h3>Salary : {newuser[0].salary}</h3>
           <Link to="/"><Button variant="primary">Back To Home</Button></Link> 
        </div>
    );
};

export default Read;