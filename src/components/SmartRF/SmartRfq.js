import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Smartrfq from './../../Asset/image/smartRFQ.png';
import star from './../../Asset/image/star.png';
import star2 from './../../Asset/image/star2.png';
export default class SmartRfq extends Component {
  render() {
    return (
      <Fragment>
         <Container>
            <Row className="SmartRfq">
               <Col lg={6} md={6} sm={12}>
                    <img src={Smartrfq} alt="smartRfg img" width="70%"/>
               </Col>
               <Col className="mt-5" lg={6} md={6} sm={12}>
                    <h1 className=' sectitle'> Smart RFQ <img className="star1" src={star} alt="" /> <img className="star2"  src={star2} alt="" /></h1>
                    <h5 className='sectitle'>Ready to Think Smart About Goloban Procurement ?</h5>
                    <p className='sectitle'>we are innovative thinkers in flobal outsourching, Our Smart Request fro Quatatin RFQ integration.Blocchain Technolgy and artificial inteligence to bring you reuirement from wnywhere </p>
                     <h6 className='sectitle'><Button>SIGN UP </Button>  read more </h6>
               </Col>
            </Row>
         </Container>
      </Fragment>
    )
  }
}
