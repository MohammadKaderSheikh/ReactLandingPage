import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import serchIcon from './../../Asset/image/search_icon.png';
import bigdata2 from './../../Asset/image/bigdata2.png';
import bigData from './../../Asset/image/bigData.png';
import light from './../../Asset/image/light.png';
import csm from './../../Asset/image/csm.png';
export default class ServiceSection extends Component {
  render() {
    return (
      <Fragment>
          <Row className="text-center mt-5">
             <Col className="mt-5 service-text"> 
                <h1>Anything To Anyone From AnyWhere </h1>
                <h4>get inspired while busness with us </h4>
             </Col>
          </Row>
          <Container>
            <Row>
                <Col lg={4} md={6} sm={6} xs={12} >
                    <div className="card">
                        <p><img className='cardImg' src={serchIcon} alt="" width="20%"/></p>
                        <h3 className='cardTitle'>Risk Intelligence </h3>
                        <p className='cardSubTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat, natus odit perspiciatis nihil assumenda.</p>
                    </div>    
                </Col>
                <Col lg={4} md={6} sm={12} >
                    <div className="card">
                        <p><img className='cardImg' src={bigData} alt="" width="20%"/></p>
                        <h3 className='cardTitle'>Big Data Analisis </h3>
                        <p className='cardSubTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat, natus odit perspiciatis nihil assumenda.</p>
                    </div>    
                </Col>
                <Col lg={4} md={6} sm={12} >
                    <div className="card">
                        <p><img className='cardImg' src={bigdata2} alt="" width="20%"/></p>
                        <h3 className='cardTitle'>Sourcing Intelligence</h3>
                        <p className='cardSubTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat, natus odit perspiciatis nihil assumenda.</p>
                    </div>    
                </Col>
                <Col lg={4} md={6} sm={12} >
                    <div className="card">
                        <p><img className='cardImg' src={light} alt="" width="20%"/></p>
                        <h3 className='cardTitle'>Smart procurement </h3>
                        <p className='cardSubTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat, natus odit perspiciatis nihil assumenda.</p>
                    </div>    
                </Col>
                <Col lg={4} md={6} sm={12} >
                    <div className="card">
                        <p><img className='cardImg' src={csm} alt="" width="20%"/></p>
                        <h3 className='cardTitle'>Technological supports </h3>
                        <p className='cardSubTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat, natus odit perspiciatis nihil assumenda.</p>
                    </div>    
                </Col>
                <Col lg={4} md={6} sm={12} >
                    <div className="card">
                        <p><img className='cardImg' src={csm} alt="" width="20%"/></p>
                        <h3 className='cardTitle'>C-Smart Marketing </h3>
                        <p className='cardSubTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat, natus odit perspiciatis nihil assumenda.</p>
                    </div>    
                </Col>
               
            </Row>
          </Container>
      </Fragment>
    )
  }
}
