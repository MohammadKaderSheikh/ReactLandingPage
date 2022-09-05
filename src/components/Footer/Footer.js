import React, { Component, Fragment } from 'react'
import { Col, Row,Button } from 'react-bootstrap'

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
         <Row className='footer text-white sectitle'>
            <Col lg={2} md={2} sm={4}>
               <h2 className='text-white'>Logo </h2>
               <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sed? Lorem ipsum dolor sit.</p> 

            </Col>
            <Col lg={2} md={2} sm={4}>
               <h3>My Account </h3>
               <p>Authors</p>
               <p>Collection</p>
               <p>Author Profile</p>
               <p>Create Collection</p>    
            </Col>
            <Col lg={2} md={2} sm={4}>
               <h3>Resources </h3>
               <p>help And Support</p>
               <p>Live Action</p>
               <p>item Details</p>
               <p>Activity</p>    
            </Col>
            <Col lg={2} md={2} sm={4}>
               <h3>Communties </h3>
               <p>About us</p>
               <p>Contact us</p>
               <p>Our Blog</p>
               <p>Discover</p>    
            </Col>
            <Col lg={2} md={2} sm={4}>
            <form className="footerForm">
                <input className='footerInput' type="email" placeholder='enter your email'  />
                <Button className='footerButton'>Connect</Button>
            </form>  
            </Col>
         </Row>
      </Fragment>
    )
  }
}
