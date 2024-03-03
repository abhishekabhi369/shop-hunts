import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Landing.css";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div>
      <Container fluid>
        <Row>
          {/* <Col sm={4}>
            "Discover, Shop, and Save: Your Ultimate Guide to Local Finds. Navigate through Nearby Stores for the Best Items at the Right Price!"
                    <h3>Shop Hunt</h3>
            </Col> */}
          <Col style={{ paddingLeft: "0", paddingRight: "0" }}>
            <div
              className="pt-3 pb-3 d-flex justify-content-between"
              style={{ backgroundColor: "black" }}
            >
              <div>
                <h5
                  className="mt-3  text-white ms-3"
                  style={{ fontFamily: "Oswald" }}
                >
                  Shop Hunt
                </h5>
              </div>
              <div>
       <Link to={'/signup'}> <button className="landing-signup">
                  Sign up
                  <div class="arrow-wrapper">
                    <div class="arrow"></div>
                  </div>
                </button></Link>
              </div>
            </div>
          </Col>
        </Row>
        <section>
          <Row className="landing-section pe-5 ps-5  text-white">
            <Col style={{ paddingLeft: "0", paddingRight: "0" }}>
              <div className="landing-main">
                <div className="">
                  <h3 className="landing-head spantext animate__animated animate__fadeInDown" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    <span> Discover,</span> Shop   <span> & Save </span>
                  </h3>
                </div>
                <div>
       <Link to={'/signin'}>        <button class="explore">
                    Explore Now
                    <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                      <path
                        clip-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button></Link>
                </div>
                <div>
                  <p className="landing-para spantext animate__animated animate__fadeInLeft mt-4"style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Your Ultimate Guide to Local Finds
                    Navigate through Nearby Stores for the Best Items at the
                    Right Price!
                  </p>
                </div>
              </div>
              
            </Col>
          </Row>
         
        </section>
        </Container>
        <Container fluid style={{ paddingLeft: "0", paddingRight: "0" }}>
        <footer className="bg-black footer-main">
            <Row className="text-center">
            <Col  style={{ paddingLeft: "0", paddingRight: "0" }}>
                <div className="ms-4 footer-admin">
                    <label htmlFor="" className="text-white me-2">Contact Admin</label>
                    <input type="text" placeholder="Enter Your Mail" className=" footer-input"/>
                    <button className="footer-btn ms-2">  <span class="circle1"></span>
    <span class="circle2"></span>
    <span class="circle3"></span>
    <span class="circle4"></span>
    <span class="circle5"></span>
    <span class="text">Submit</span></button>
                    </div>
            </Col>

            </Row>
            <Row>
              <Col>
              <div class="text-center p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.05)"}}>
    © 2024 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Abhishek</a>
  </div>
              </Col>
            </Row>
        </footer>
        </Container>
    </div>
  );
}

export default Landing;
