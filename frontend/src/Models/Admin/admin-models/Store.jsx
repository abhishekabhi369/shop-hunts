import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
function Stores() {
  const [stores, setStores] = useState([]);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    Name: '',
    Password: '',
    Mobile: '',
    Location: {
      coordinates: ['', ''],
    },
    role: 'Store',
  });
  useEffect(() => {
    fetchData();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('Location.coordinates')) {
      const coordinates = [...formData.Location.coordinates];
      const index = parseInt(name.split('[')[1].split(']')[0], 10);
      coordinates[index] = value;
  
      setFormData((prevFormData) => ({
        ...prevFormData,
        Location: {
          ...prevFormData.Location,
          coordinates,
        },
      }));
    } else {
     
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
    
  };
  console.log("formdata",formData);
 
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/findallstores`);
      setStores(response.data.store);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  console.log(stores);
  // console.log(users,"name");
  const handleDelete = async (userId) => {
    console.log(userId);
    try {
    
     let result= await axios.delete(`http://localhost:4001/deletestore/${userId}`);

      
      if(result){
        fetchData()
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  const AddStore =()=>{
    setShow(true);
  }
  const handleClose = () => {
    setShow(false)
  };
    const handleSubmit = async(event) => {
      event.preventDefault();
      try {
        const config={
          headers:{
            "Content-type":"application/json"
          }
        }
        const { Name, Password, Mobile, Location, role }=formData
        const value=await axios.post('http://localhost:4001/addstore',{Name,Password,Mobile,Location: {
      type: 'Point',
      coordinates: Location.coordinates,
    },role},config)
        console.log('Store added successfully:', value.data);
        if(value){
          fetchData();
        }
      } catch (error) {
        console.log(error);
      }
      
     
      console.log('Signup data:', formData);
  
      
      setFormData({
        Name: '',
        Password: '',
        Mobile: '',
        Location: {
          coordinates: ['', ''],
        },
        role: 'Store',})
        setShow(false);
    };
  return (
    <div className="text-center bg-black">
      <Container>
        <Row>
          <div>
            <h2>Stores List</h2>
          </div>
        </Row>
        <Row>
          <Col>
            <table className='table-date w-75'>
              <thead>
                <tr>
                  <th>Store Name</th>
                  <th>Mobile</th>
                  <th>Products</th>
                  <th >Actions</th>
                </tr>
              </thead>
              <tbody>
                {stores.map((store) => (
                  <tr key={store.id}>
                    <td>{store.Name}</td>
                    <td>{store.MobNumber}</td>
                    <td>
                      <ul>
                        {store.Products.map((product) => (
                          <li>
                            {product.Name} - {product.Price}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      {/* Pass the store's ID to the handleDelete function */}
                      <Button
                        style={{ color: 'white' }}
                        variant='danger'
                        onClick={()=>handleDelete(store.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className='text-center mt-3'>
          <Col>
          <Button
                        style={{ color: 'white' }}
                        variant='success'
                        onClick={AddStore}
                       >
                        Add
                      </Button>          
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Add Store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <label  className='signup-label' htmlFor="name">Name</label>
        <input  autoComplete="off"  className='signup-input modal-in' type="text" name='Name' value={formData.Name} onChange={handleChange} placeholder="Enter Your Name" />
        <label className='signup-label' htmlFor="password">Password</label>
        <input  autoComplete="off"  className='signup-input modal-in' name='Password' value={formData.Password} type="password" placeholder="Enter Your Password"  onChange={handleChange} />
        <label className='signup-label' htmlFor="mob-number">Mobile Number</label>
        <input  autoComplete="off"  className='signup-input modal-in' type="text"  onChange={handleChange} name='Mobile' placeholder="Enter Your Number" value={formData.Mobile}/>
        <label  className='signup-label' htmlFor="location">Location</label>
        <input  autoComplete="off"  className='signup-input modal-in w-50'  type="text" name='Location.coordinates[0]' value={formData.Location.coordinates[0]} onChange={handleChange} placeholder="latitude"/>
        <input  autoComplete="off"  className='signup-input text-dark modal-in w-50'  type="text" name='Location.coordinates[1]' value={formData.Location.coordinates[1]} onChange={handleChange} placeholder="longitude" />           
                       
        </Modal.Body>      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Store
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </div>
  );
}

export default Stores;
