import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ok from './../../Asset/image/ok.png';
import computer from './../../Asset/image/Computerservice.png';
export default class SmartTechnology extends Component {
  render() {
    return (
      <Fragment>
         <Container className="mt-5 smart">
              <h1 className="text-center mt-5 teno ">Ingenious Sign-up: Smart Technology: Transform business</h1>
              <Row>
              <Col className="mt-5" lg={6} md={6} sm={12}>
                   <p>The only worldwide unified business place to offer your company's procurement and supply to the next level of success.</p>
                   <p><img src={ok} alt="" width="3%"/>  AI- Diven digital dashboard </p>
                   <p><img src={ok} alt="" width="3%"/>  AI- Diven digital dashboard </p>
                   <p><img src={ok} alt="" width="3%"/>  AI- Diven digital dashboard </p>
                   <p><img src={ok} alt="" width="3%"/>  AI- Diven digital dashboard </p>
                   <h1 className=""> <Button className="text-white btn btn-info">SING IN</Button> <Button className='btn btn-light'>SIGN UP </Button> </h1>

               </Col>
               <Col className='contract' lg={6} md={6} sm={12}>
                    <img src={computer} alt="smartRfg img" width="70%"/>
               </Col>
              </Row>
         </Container>
      </Fragment>
    )
  }
}
