import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Letter from './../../Asset/image/Letter.png';
export default class Subscribe extends Component {
  render() {
    return (
      <Fragment>
       <Container>
       <Row className='subscribe mt-5 mb-5'>
          <Col className='subscribe-text' lg={7} md={7} sm={7}>
            <h1 className='subscribe-text1'>Subscribe Newsletter</h1>
            <p>You need a teacher! I can show you the ways of the Force! The <br /> Force. Lieutenant, get back to your station! </p>
            <form action="">
                <input className='SubscribeInput' type="email" placeholder='enter your email'  />
                <Button className='SubscribeButton'>Connect</Button>
            </form>
          </Col>
          <Col lg={5} md={5} sm={5}>
          <img src={Letter} alt="smartRfg img" width="60%"/>
          </Col>
        </Row>
       </Container>
      </Fragment>
    )
  }
}
