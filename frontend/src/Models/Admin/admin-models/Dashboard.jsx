import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Dashboard() {
  return (
    <div className='bg-black'>
      <Container fluid>
        <Row>
          <Col style={{paddingLeft:"0",paddingRight:"0"}}>
          <h1>Hai Welcome TO Admin Dashboard</h1>
          </Col>
        </Row>
     
        </Container>

    </div>
  )
}

export default Dashboard