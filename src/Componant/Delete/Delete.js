import React, { useContext } from 'react';
import { Modal , Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { UserContext } from '../Context/Context';
const Delete = () => {

    const{id}= useParams();
      const [users, setUser] = useContext(UserContext);
    const deleteuser=(id)=>{
        const newuser = users.filter((user)=>user.id!=id)
        setUser(newuser);
    }
    
    return (
        <div>
         <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Are Your Sure You Wan't To Delete Users?</Modal.Title>
  </Modal.Header>

  

  <Modal.Footer>
      <Link to="/">
      <Button variant="secondary" onClick={()=>deleteuser(id)}>Delete</Button>
    <Button variant="primary">Cencle</Button>
      </Link>
  
  </Modal.Footer>
</Modal.Dialog>
        </div>
    );
};

export default Delete;