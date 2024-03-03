import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import {jwtDecode} from 'jwt-decode';
  import  {Navigate, useNavigate} from 'react-router-dom'
import './StoreAdminpanel.css'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
function StoreAdminPanel() {
  const [token,setToken]=useState()
  const [storeId, setStoreId] = useState({ id: null });
  const [login, setLogin] = useState(false);
  const [storedata,setStoreData]=useState()
  const navi=useNavigate()
  const [show, setShow] = useState(false);
  const [productitem,setProductItem]=useState({
    id:'',
    Description: '',
    Name:"",
    Price: '',
    Availability:'',
  })
  const [modal, setModal] = useState(false);
  const borderStyle = {
    borderCollapse: "collapse",
    border: "2px solid white",
    textAlign: 'center',
  };
  const [formData, setFormData] = useState({
    
    Name: '',
    Description: '',
    Price: '',
    Availability:true,
    Store: storeId._id || null ,
  });
  const navigator=useNavigate()
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    setToken(storedToken);
    setLogin(!!storedToken);
  }, []);
  // console.log("Token",token);
    useEffect(() => {
    if (token) {
      fetchData();
    } 
  }, [token]);
  useEffect(() => {
    if (storeId && storeId.id) {
       setFormData({ ...formData, Store: storeId.id});
      fetchStore(storeId.id);
    }
  }, [storeId]);
  useEffect(() => {
    console.log("Storedata=", storedata);
  }, [storedata]); 
  useEffect(() => {
    console.log("products Details", productitem);
  }, [productitem]); 
  
  const fetchData = () => { 
    try {
      const decodedToken = jwtDecode(token);
      setStoreId(decodedToken);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  };
  const fetchStore= async(ID)=>{
    if(login){
    try {
      const response =await axios.get(
        `http://localhost:4001/findstorebyid/${ID}`);
        
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

  // console.log(storedata,"store");
}
const handleShow = () => setShow(true);
const handleClose = () => {setShow(false)
  setFormData({ Name: '',
  Description: '',
  Price: '',
  Availability:true,
  Store: storeId._id || null ,})
  setModal(false)
  setProductItem({
    id:'',
    Description: '',
    Name:"",
    Price: '',
    Availability:'',
  })
};

const handleChange = (e) => {
  
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
const handleupdateChange=(e)=>{
  const { name, value } = e.target;
  setProductItem({ ...productitem, [name]: value });
}
console.log(productitem,"formvalues")
const handleSubmit= async(event)=>{
  event.preventDefault();
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const {Name, Description,Price, Availability,Store} = formData;
    
    const value = await axios.post(
      "http://localhost:4001/addproducts",
      { Name, Description,Price, Availability,Store},
      config
    );

      if(value){
        fetchData();
      }
  } 
  catch (error) {
    console.log(error);
  }
  setShow(false)
  setFormData({ Name: '',
  Description: '',
  Price: '',
  Availability:true,
  Store: storeId._id || null ,})
}
const updateProduct=async(id)=>{

try {
  const config={
    headers:{
      "Content-type":"application/json"
    }
  }
  const { Description,Price,Availability }=productitem
  const value=await axios.put(`http://localhost:4001/productedit/${id}`,{Description,Price,Availability},config)
  console.log('Store added successfully:', value);
  if(value)
  {
    fetchData();
    setProductItem({
      id:'',
      Description: '',
      Name:"",
      Price: '',
      Availability:'',
    })
    setModal(false)
  }
} catch (error) {
  console.log(error);
}
}

const modalshow= (product)=>{
  console.log(product,"produc");
  console.log(product.Description,878778);
      setProductItem({...productitem,id:product._id ,Description: product.Description,
        Name:product.Name,
    Price: product.Price,
    Availability: product.Availability === '' ? true : product.Availability,});
  
setModal(true)
 
  console.log(productitem, 99999);
}
const handleClosemodal= ()=>{
  setModal(false)
}
const deleteItem =async(productId)=>{
try {
    
  let result= await axios.delete(`http://localhost:4001/deleteproduct/${productId}`);

   
   if(result){
     fetchData()
   }
 } catch (error) {
   console.error('Error deleting user:', error);
 }

}
const handleLogout = () => {
  localStorage.removeItem("authToken");
  navigator('/')
};
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
            <Button variant='danger'className='mt-3 ms-2 pe-5 ps-5' onClick={handleLogout}>Logout</Button>
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
                        <th style={borderStyle}>Available</th>
                        <th style={borderStyle} colSpan={2}>Actions</th>
                      </tr>
                      {
                        storedata.map((store)=>
                        store.Products.map((item)=>
                        <tr style={borderStyle}>
                        <th style={borderStyle}>{item.Name}</th>
                        <th style={borderStyle}>{item.Price}</th>
                        <th style={borderStyle}><input type="checkbox" checked={item.Availability}/></th>
                        <th style={borderStyle}><Button onClick={()=>deleteItem(item._id)}>Remove</Button></th>
                        <th style={borderStyle}><Button onClick={()=>{modalshow(item)}}>Edit Item</Button></th>
                      </tr>
                        )
                        //onClick={handleShow} updateProduct(item._id)
                        )
                      }
                      
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
              <Button variant="danger" onClick={handleShow} className='mt-3 pe-5 ps-5'>
              Add
            </Button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label  className='signup-label' htmlFor="name">Name</label>
        <input  autoComplete="off"  className='signup-input modal-in' type="text" name='Name' value={formData.Name} onChange={handleChange} placeholder="Enter Product Name" />
        <label className='signup-label' htmlFor="Description">Description</label>
        <input  autoComplete="off"  className='signup-input modal-in' name='Description' value={formData.Description} type="text" placeholder="Enter Description"  onChange={handleChange} />
        <label className='signup-label' htmlFor="Price">Price</label>
        <input  autoComplete="off"  className='signup-input modal-in' type="text"  onChange={handleChange} name='Price' placeholder="Enter Price" value={formData.Price}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
              </Col>
            </Row>
          </Container>      
          <Modal show={modal} onHide={handleClosemodal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label  className='signup-label' htmlFor="name">Name</label>
        <input  autoComplete="off"  className='signup-input modal-in' type="text" name='Name' value={productitem.Name}  />
        <label className='signup-label' htmlFor="Description">Description</label>
        <input  autoComplete="off"  className='signup-input modal-in' name='Description' value={productitem.Description} type="text" placeholder={productitem.Description}  onChange={handleupdateChange} />
        <label className='signup-label' htmlFor="Price">Price</label>
        <input  autoComplete="off"  className='signup-input modal-in' type="text"  onChange={handleupdateChange} name='Price' placeholder={productitem.Price}/>
        
        <label className='mt-2' for="Availabile">Availabile</label>
        <select name="Availability"  id="Availabile" defaultValue={productitem.Availability} onChange={handleupdateChange}>
       
           <option value={productitem.Availability}>Select</option>
           <option value="false">No</option>
          <option value="true">Yes</option>
         
        </select>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>updateProduct(productitem.id)}>
           Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          </div>
          </Container>
    </div>
  )
}

export default StoreAdminPanel