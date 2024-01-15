import React, { useEffect, useState } from 'react';
import './Admin.css';
import User from './admin-models/User';
import Dashboard from './admin-models/Dashboard';
import Stores from './admin-models/Store'
import { Container } from 'react-bootstrap';


function AdminPanel() {
  const [dashboard, setdashboard] = useState(true);
  const [user,setuser]=useState(false)
  const [store,setstore]=useState(false)
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
  return (
    <div className=''>
      <Container fluid style={{paddingLeft:"0",paddingRight:"0"}}>
      <div className='admin-text bg-black  text-center  '>
          <h1 className='text-white' style={{marginBottom: "0"}}>Admin Panel</h1>
         
        </div>
        <div className='items bg-black '>
          <div className='dashboard' onClick={createdashboard}><h4>DashBoard</h4></div>
          <div className='User' onClick={createuser}> <h4>User</h4></div>
          <div className='Store' onClick={createstore}><h4>Store</h4></div>
          <div ><h4>Logout</h4></div>
        </div>
      <div className="content">
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
      </Container>
    </div>
  );
}

export default AdminPanel;
