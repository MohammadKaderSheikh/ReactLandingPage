import React, { Component, Fragment } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import serchIcon from './../../Asset/image/search_icon.png';
import Support1 from './../../Asset/image/Support1.png';
import Support2 from './../../Asset/image/Support2.png';
import support4 from './../../Asset/image/support4.png';

export default class Support extends Component {
  render() {
    return (
      <Fragment>
         <Container className='Support'>
            <Row className='support'>
                <Col className='text-center'>
                   <h1  className='mb-5 sectitle'>Smart. Strategy. Sustainability. Support. Success.</h1>
                   <p>Hefgro is the world's first and best business provider for technology, services, and solution, with field business <br /> execution to procurement, supply, and operations support.</p>
                </Col>
            </Row>
            <Row>
            <Col lg={4} md={6} sm={6} xs={12} >
                    <div className="card">
                        <p className="mt-4"><img className='cardImg' src={Support1} alt="" width="20%"/></p>
                        <h3 className='cardTitle'>Massive Categories </h3>
                        <p className='cardSubTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat, natus odit perspiciatis nihil assumenda.</p>
                    </div>    
                </Col>
                <Col lg={4} md={6} sm={6} xs={12} >
                    <div className="card">
                        <p className="mt-4" ><img className='cardImg ' src={Support2} alt="" width="20%"/></p>
                        <h3 className='cardTitle'>Smart order </h3>
                        <p className='cardSubTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat, natus odit perspiciatis nihil assumenda.</p>
                    </div>    
                </Col>
                <Col lg={4} md={6} sm={6} xs={12} >
                    <div className="card">
                        <p className="mt-4"><img className='cardImg' src={support4} alt="" width="20%"/></p>
                        <h3 className='cardTitle'>Smart Business quote </h3>
                        <p className='cardSubTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat, natus odit perspiciatis nihil assumenda.</p>
                    </div>    
                </Col>
            </Row>
         </Container>
      </Fragment>
    )
  }
}
