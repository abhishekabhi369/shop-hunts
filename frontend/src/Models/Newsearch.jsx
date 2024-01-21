import React, { useEffect, useState } from "react";
import "./Newsearch.css";
import Home from "./Home";
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { RiLogoutBoxLine } from "react-icons/ri";
import axios from "axios";
function Newsearch() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setsearch] = useState('')
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [products,setProducts]=useState()

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    setIsLoggedIn(!!storedToken);
    
  }, []);
  useEffect(() => {
    console.log("products", products);
  }, [products]);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };
  const openGoogleMaps = (latitude ,longitude) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, '_blank');
  };
const searchProduct=async(event)=>{
  if(isLoggedIn){
    const searchTerm = event.target.value;
    try {
      setsearch(searchTerm);
      if (searchTerm.trim() === '') {
        // If the search input is empty, clear the displayed products
        setProducts([]);
      } 
      else{
      const response = await axios.get(`http://localhost:4001/products/${search}`);                                                                                              
      setProducts(response.data, () => {
        console.log("products", products);
      }); 
        if(setProducts)
        {
            console.log("products",products);
        } 
      }
    } catch (error) {
      console.error('Error during search:', error);                                                             
    }
  }
  else{
    setProducts('')
    setShowLoginModal(true);
  }
}
  const borderStyle = {
    border: "1px solid #C75DEB",
  };
  const sortedProducts = products
  ? [...products].sort((a, b) => a.Price - b.Price)
  : [];
  return (
    <div  className="bg-black" >
      
      <div className="le-re">
        <div className="le">
        
              <div className="Navbars d-flex">
              <div className="menu-circle mt-4 "></div>
              <div className="search-bar mt-3">
                <input type="text" placeholder="Search"  onChange={ searchProduct} />
              </div>
             
              <div className="header-profile mt-3">
               
                {isLoggedIn ? null : <Link to={'/signin'}> <div className="profile-img"><FaRegUser /></div> </Link>}
              </div>
              {isLoggedIn ? <div className="Log-out text-white" onClick={handleLogout}><RiLogoutBoxLine color="white" />logout</div> : null}
            </div>
            <div className="content-section">
                    <div className="content-section-title text-white text-center mb-3" >
                   <h4>Stores Near You</h4> 
                    </div>
                    <Container>
                      <Row>
                      <div className="stores-list d-flex flex-wrap">
                      <div className="apps-card">
                      {
                        sortedProducts?.map((data)=>
                        <Col md={4} sm={6} xs={12} key={data._id}>
                         
                  
                      <div className="app-card ">
                        <span>
                          <svg viewBox="0 0 52 52" style={borderStyle}>
                            <g xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                                fill="#3a3375"
                                data-original="#3a3375"
                              />
                              <path
                                d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z"
                                fill="#e4d1eb"
                                data-original="#e7adfb"
                              />
                            </g>
                          </svg>
                          <h6>{data.Store.Name}</h6>
                        </span>
                        <div className="app-card__subtext d-flex pt-3">
                         <h6>{data.Name} -{`>`}</h6>  <h6>{data.Price}&#8377;</h6>
                        </div>
                        <div className  ="app-card-buttons">
                          <button class="content-button "
                          onClick={() => openGoogleMaps(data.Store.Location.coordinates[0], data.Store.Location.coordinates[1])}>
                            Get Direction
                          </button>
                        </div>
                      </div>
                    
                    


                        </Col>

                        )
                      }  
                      </div>
                      </div>
                      </Row>
                    </Container>
                  </div>
            </div>
           
        

        <div className="re">
          <Home />
        </div>
      </div>
      <Modal show={showLoginModal}>
        <p>Please log in to perform a search.</p>
        {/* You can add login form or a link to the login page inside the modal */}
        <div className="text-center" style={{borderRadius:"10px"}}>
        <Link to={'/signin'}><Button onClick={() => setShowLoginModal(false)} variant="success">Login</Button></Link>
        <Button onClick={() => setShowLoginModal(false)} variant="danger">Cancel</Button></div>
        
      </Modal>
    </div>
  );
}

export default Newsearch;
