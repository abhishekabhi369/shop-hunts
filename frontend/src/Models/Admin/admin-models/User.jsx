import React from 'react'
import './User.css'
import {Button} from 'react-bootstrap'


function User() {

  return (
    <div className='text-center'>
      <div><h2>Users</h2></div>
    <table>
    <tr>
        <th>Name</th>
        <th>Email</th>
      
        <th>Phone Number</th>
        <th>Address</th>
        <th colSpan={2}>Actions</th>
    </tr>
      
                <tr>
                    <td>Abhishek</td>
                    <td>Abhishek</td>
                    <td>705500</td>
                    <td>addressa</td>
               <td> <Button style={{color:'black',backgroundColor:"yellow"}} >view</Button></td>    
               <td> <Button style={{color:'white',backgroundColor:"blue"}} variant="success" >Delete</Button></td>

                </tr>
    </table>

    </div>
  )
}

export default User