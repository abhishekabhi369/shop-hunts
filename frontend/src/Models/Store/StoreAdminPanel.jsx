import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import {jwtDecode} from 'jwt-decode';
  import  {Navigate, useNavigate} from 'react-router-dom'
import './StoreAdminpanel.css'
import axios from 'axios';
function StoreAdminPanel() {
  const [token,setToken]=useState()
  const [storeId,setStoreId]=useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [storedata,setStoreData]=useState()
  const navi=useNavigate()
  const borderStyle = {
    borderCollapse: "collapse",
    border: "2px solid white",
    textAlign: 'center',
  };
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    setToken(storedToken);
    setIsLoggedIn(!!storedToken);
  }, []);
  console.log("Token",token);
    useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);
  useEffect(() => {
    if (storeId && storeId.id) {
      
      fetchStore(storeId.id);
    }
  }, [storeId]);
  useEffect(() => {
    console.log("Storedata=", storedata);
  }, [storedata]); // Removed unnecessary dependency

  const fetchData = () => {
   
    try {
      const decodedToken = jwtDecode(token);
      setStoreId(decodedToken);
      
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  };
  const fetchStore= async(ID)=>{
    if(isLoggedIn){
    try {
      const response =await axios.get(
        `http://localhost:4001/findstorebyid/${ID}`);
        console.log(response,"value");
        setStoreData([response.data])
     
        
        // var storedetails=[response.data]
    } catch (error) {
        console.error('Error during search:', error);    
    }
  }
  else{
    alert("Login First")
      navi('/storelogin')
  }
  // console.log(storedetails,"store"); 

  console.log(storedata,"store");
}

  return (
    <div className='bg-black text-white' style={{height:'100vh'}}>
          <Container fluid>
          <Row className='text-center text-white bg-black'>
            <Col>
                <h1>STORE PANEL</h1>
            </Col>
          </Row>
          <div>
          
            {
              storedata && storedata.map((data)=>
              <>
              <Row  style={{marginLeft:"2em"}}>
            <Col>
              <label  className='signup-label' htmlFor="name">Store Name</label>
              <input  className='signup-input text-white w-auto' type="text" name='Name' value={data.Name} />
        
              <label className='signup-label' htmlFor="mob-number">Mobile Number</label>
               <input className='signup-input text-white w-auto' type="text"   name='Mobile' value={data.Mobile} />
              <div className=''>
               <Button variant="primary" className='mt-3 pe-5 ps-5'>
              Edit
            </Button>
            </div>
               </Col>
               </Row>
                <div className='text-center mt-3'>
                <Row>
                  <Col>
                        <h3>ITEMS IN SHOP</h3>
                  </Col>
                </Row>
                  <Row >
                  <Col>
                  <div className='table-div mt-3'>
                    <table className='table-date' style={borderStyle}>
                    <tbody>
                      <tr style={borderStyle}>
                        <th style={borderStyle}>Product Name</th>
                        <th style={borderStyle}>Price</th>
                        <th style={borderStyle}>Availability</th>
                        <th style={borderStyle}>Actions</th>
                      </tr>
                      <tr style={borderStyle}>
                        <th style={borderStyle}>Rice</th>
                        <th style={borderStyle}>50</th>
                        <th style={borderStyle}><input type="checkbox" name="" id="" /></th>
                        <th style={borderStyle}><Button>Remove  </Button></th>
                      </tr>
                      </tbody>
                    </table>
                    </div>
                  </Col>
      
      
                  </Row>
                </div>
                </>
              )
            }
           
        <Container>
            <Row>
              <Col>
              <div className='text-center'>
              <Button variant="danger" className='mt-3 pe-5 ps-5'>
              Add
            </Button>
            </div>
              </Col>
            </Row>
          </Container>      
         
          </div>
          </Container>
    </div>
  )
}

export default StoreAdminPanel