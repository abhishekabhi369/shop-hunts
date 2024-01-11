import React, { useContext, useState } from 'react'
import { Newcontext } from './App'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Edit from './Edit'

function Store() {
         
       
  return (
    <div className='text-center'>
       <h1 className='text-1 text-center text-white mb-0'>TODO APP</h1>
       <div  className='main-div'>
        <div className='pt-5'>
        <table className='mx-auto '>
        <tr>
          <th>Store Id</th>
          <th>Store Name</th>
          <th>Owner Name</th>
          <th>Number</th>
          </tr>
          {
            data.map((display,index)=>
          {
            if(index>0)
            {
              return(
                <tr>
                <td>{display.name}</td>
                <td>{display.date}</td>
                <td>{display.status}</td>
                <td>
                <input
                  type="checkbox"
                
                  checked={display.checked}
                  name="status"
                  onChange={(event) => checkchange(event, index)}
                  
                />
                </td>
                <td>
             <Link to={`/view/${index}`}>  <Button className='bg-success pe-5 ps-5 '>View</Button></Link> </td>

             <td><Link to={`edit/${index}`}>  <Button className='bg-dark pe-5 ps-5'  onClick={()=>setedit(!edit)}>Edit</Button></Link> </td>
            
                <td><Button className='bg-danger   pe-5 ps-5' onClick={()=>showitems(index)}>Delete</Button></td>
                
               </tr>
              )
            }
              
          }
            )
          }
        </table>
        </div>
        <Link to={'/add'}>  <Button className='bg-info text-black mt-5'>ADD NOW</Button></Link>
        </div>
      
    </div>
  )
}

export default Store