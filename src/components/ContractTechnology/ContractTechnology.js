import React, { Component, Fragment } from 'react';
import { Button, Row,Col, Container } from 'react-bootstrap';
import weman from './../../Asset/image/Woman colleagues discussing team work.png';

export default class ContractTechnology extends Component {
  render() {
    return (
      <Fragment>
        <Container>
        <Row className=''>
               <Col className="mt-5" lg={6} md={6} sm={12}>
                    <h1 className='mb-5 sectitle'>Step ahead to the new era of contract technology</h1>
                    <h5 className='mb-3 sectitle'>Ready to Think Smart About Goloban Procurement ?</h5>
                    <p className='sectitle'> Forge ahead to the new era of the global contract with smart technologies </p>
                  
                     <p className="sectitle" > Smart RFQ integrated our unified analytics and blockchain smart contract technology to make your RFQ more  powerful and three layer smart logical functionality brings verified and authenticated proposal against your RFQ..  signup </p>
                     <Button>READ MORE</Button>
               </Col>
               <Col className='contract' lg={6} md={6} sm={12}>
                    <img src={weman} alt="smartRfg img" width="70%"/>
               </Col>
        </Row>
        </Container>
      </Fragment>
    )
  }
}
