import React, { useEffect, useState } from 'react';
import './Admin.css';
import User from './admin-models/User';
import Dashboard from './admin-models/Dashboard';
import Stores from './admin-models/Store'
import {useNavigate} from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap';


function AdminPanel() {
  const [dashboard, setdashboard] = useState(true);
  const [user,setuser]=useState(false)
  const [store,setstore]=useState(false)
const navigator=useNavigate()
  const createdashboard=()=>{
    setdashboard(true)
    setuser(false)
    setstore(false)
  }
  const createuser=()=>{
    setdashboard(false)
    setstore(false)
    setuser(true)
  }
  const createstore=()=>{
    setdashboard(false)
    setstore(true)
    setuser(false)
  }
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigator('/')
  };
  return (
    <div className="text-center bg-black admin-div" >
      
      <Container fluid>
        <Row>
          <div className='bg-black text-white pb-3'>
            <h2>ADMIN PANEL</h2>
          </div>
        </Row>
        
        <Row className='text-center me bg-black'>
          <Col>
          <div className=' button-admin'>
          <Button  onClick={createdashboard}>Dashboard</Button>
          <Button onClick={createuser}>User</Button>
          <Button onClick={createstore}>Store</Button>
          <Button onClick={handleLogout}>Logout</Button>     
          </div>    
          </Col>
        </Row>
       
      </Container>
      <Container fluid>
      <Row>
          <Col style={{paddingLeft:"0",paddingRight:"0"}}>
      <div className="content bg-black" >
          {
            dashboard ? <Dashboard/> : ''
          }
          {
            user ? <User/>: ''
          }
          {
            store ? <Stores/>:''
          }
      </div>
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default AdminPanel;
