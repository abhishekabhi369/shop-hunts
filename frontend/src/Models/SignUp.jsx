import React, { useState } from 'react'
import axios, {} from 'axios'
import './Signup.css'
import Modal from 'react-modal';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function SignUp() {
  const [error,setError]=useState('')
  const [formData, setFormData] = useState({
        
    Name: '',
    Password: '',
    Email: '',
    MobNumber: '',
    Address:'',
    role: 'Consumer',

});
const [modalIsOpen, setModalIsOpen] = useState(false);
const handleChange = (e) => {

  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value
  });

};

  const handleSubmit = async(event) => {
    event.preventDefault();
  
    try {
      const config={
        headers:{
          "Content-type":"application/json"
        }
      }
      const { Name, Email, Password, MobNumber, Address, role }=formData
      const value=await axios.post('http://localhost:4001/signup',{Name, Email, Password, MobNumber, Address, role},config)
      console.log('User signed up successfully:', value.data);
      setModalIsOpen(true);

    } catch (error) {
      console.log(error);
    }

   
    console.log('Signup data:', formData);
    setFormData({ Name: '',
    Password: '',
    Email: '',
    MobNumber: '',
    Address:'',
    role: 'Consumer',})
  
  };
  return (
    <div className='bg-black'>
     
              <Modal
        isOpen={modalIsOpen}
        position='center'
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Account Created Successfully"
      >
        <h4>Account Created Successfully!</h4>
        <p>Your account has been created. You can now log in.</p>
        
      <Link to={'/signin'}> <Button className='pe-4' onClick={() => setModalIsOpen(false)}>Login</Button></Link> 
        <Button color="gray" onClick={() => setModalIsOpen(false)}>Close</Button>
     
      </Modal>
      <div className="bg-black text-white">
         <div className="menu-circle"></div>
      <div className="main bg-black">
       
      <div className='form-signup'>
              <form  onSubmit={handleSubmit} autoComplete="off" className="pe-5 ps-5 pt-3 pt-3 pb-3 mt-4 ">
        <h3>Register Here</h3>

        <label className='signup-label' htmlFor="username">Enter Your Email</label>
        <input className='signup-input' name='Email' type="text" placeholder="Email"   value={formData.Email}   onChange={handleChange} required />

        <label className='signup-label' htmlFor="password">Password</label>
        <input className='signup-input' name='Password' value={formData.Password} type="password" placeholder="Enter Your Password"  onChange={handleChange} required/>
        <label  className='signup-label' htmlFor="name">Name</label>
        <input  className='signup-input' type="text" name='Name' value={formData.Name} onChange={handleChange} placeholder="Enter Your Name" />
        <label className='signup-label' htmlFor="mob-number">Mobile Number</label>
        <input className='signup-input' type="text"  onChange={handleChange} name='MobNumber' placeholder="Enter Your Number" value={formData.MobNumber} required/>
        <label className='signup-label' htmlFor="address">Address</label>
        <input className='signup-input'  type="textarea" name='Address' value={formData.Address} onChange={handleChange} placeholder="Enter Your Address" id="address" required/>
        {/* <label className='signup-label'>
          Role:
          <select className='signup-input'  value={formData.role} name='role'  onChange={handleChange} disabled>
           
            <option value="Consumer">Consumer</option>
          </select>
        </label> */}
        {error && (
                  <p className="mt-3" style={{ color: "red" }}>
                    {error}
                  </p>
                )}
        <button type="submit" className='signup-button'>Sign Up</button>
        <p className="message">Already registered? <Link to={'/signin'}><a href="#">Sign In</a></Link> </p>
    </form>
    </div> 
              </div>
            </div>
    
            </div>
          
  )
}

export default SignUp