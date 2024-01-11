import React from 'react'
import './User.css'
import {Button} from 'react-bootstrap'


function User() {

  return (
    <div>

    <table>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Phone Number</th>
        <th>Address</th>
    </tr>
      
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>

               <td> <Button style={{color:'black',backgroundColor:"yellow"}} >view</Button></td>    
               <td> <Button style={{color:'white',backgroundColor:"red"}} variant="success">Edit</Button></td>    
               <td> <Button style={{color:'white',backgroundColor:"blue"}} variant="success" >Delete</Button></td>

                </tr>
    </table>

    </div>
  )
}

export default User