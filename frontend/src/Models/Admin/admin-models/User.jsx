import React, { useEffect, useState } from 'react'
import './User.css'
import {Button, Col, Container, Row} from 'react-bootstrap'
import axios from 'axios'

function User() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/findallusers`);
      setUsers(response.data.user); 
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  console.log(users);
  const handleDelete = async (userId) => {
    console.log(userId);
    try {
    
     let result= await axios.delete(`http://localhost:4001/delete/${userId}`);

      if(result){
        fetchData()
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  return (
    <div className='text-center'>
      <Container>
        <Row>    
           <div><h2>Users List</h2></div>
        </Row>
    <Row>
    <Col>      
      <table>
    <tr>
        <th>Name</th>
        <th>Email</th>
      
        <th>Phone Number</th>
        <th>Address</th>
        <th colSpan={2}>Actions</th>
    </tr>
    {users.filter((user) => user.role === 'Consumer')
                  .map((user) => (
                    <tr key={user.id}>
                      <td>{user.Name}</td>
                      <td>{user.Email}</td>
                      <td>{user.MobNumber}</td>
                      <td>{user.Address}</td>
                      <td>
                        {/* You can add the desired action for 'Consumer' role here */}
                        <Button
                          style={{ color: 'white', backgroundColor: 'blue' }}
                          variant='success'
                          onClick={()=>handleDelete(user.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
    </table>
    </Col>
    </Row>
      <Row className='text-center'>
        <Col>
        {/* <Button style={{color:'white',backgroundColor:"blue"}} variant="success" >Add User</Button> */}
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default User