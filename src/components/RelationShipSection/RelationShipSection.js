import React, { Component, Fragment } from 'react'
import { Row,Col, Button, Container } from 'react-bootstrap'
import handsek from './../../Asset/image/womanandman.png';

export default class RelationShipSection extends Component {
  render() {
    return (
      <Fragment>
        <Container>
         <h1  className='mb-5 text-center sectitle'>More About Our Services</h1>
        <Row className=''>
               <Col className="mt-5" lg={6} md={6} sm={12}>
                    <h1 className='mb-3 sectitle'>Relationship. Interaction. Support. Profit. Growth</h1>
                     <p  className='mb-4 sectitle'>Get a fantastic match by partnering with your service. Our business ethics can help you sustain prosperity and help you accomplish your goals, and get great rewards by partnering with your service.</p>
                     <Button className='btn btn-info text-light '>Join With US </Button>
               </Col>
               <Col className='contract' lg={6} md={6} sm={12}>
                    <img src={handsek} alt="smartRfg img" width="70%"/>
               </Col>
        </Row>
     
        </Container>
      </Fragment>
    )
  }
}
