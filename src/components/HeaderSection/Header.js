import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import bannarImg from './../../Asset/image/bannerImg.png';
export default class Header extends Component {
  render() {
    return (
      <Fragment>
         <Carousel>
                   <Carousel.Item>
                     <Row className="carroselItem">
                            <Col lg={6} md={6} sm={12} className="carrosel_text">
                            <div className="cartext">
                            <h3 className="car-text1">Worl's First One-x  <br /> stop  <span className="car-text2"> <b>Unified Service And Execution Company</b> </span></h3> 
                            
                            </div>
                                <p>powering your purchase ,Sales and business</p>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <img className="bannerImg" src={bannarImg} alt="" />
                          </Col>
                      </Row> 
                    </Carousel.Item>
                    <Carousel.Item>
                     <Row className="carroselItem">
                            <Col lg={6} md={6} sm={12} className="carrosel_text">
                            <div className="cartext">
                            <h3 className="car-text1">Worl's First One-x  <br /> stop  <span className="car-text2"> <b>Unified Service And Execution Company</b> </span></h3> 
                            
                            </div>
                                <p>powering your purchase ,Sales and business</p>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <img className="bannerImg" src={bannarImg} alt="" />
                          </Col>
                      </Row> 
                    </Carousel.Item>
                    <Carousel.Item>
                     <Row className="carroselItem">
                            <Col lg={6} md={6} sm={12} className="carrosel_text">
                            <div className="cartext">
                            <h3 className="car-text1">Worl's First One-x  <br /> stop  <span className="car-text2"> <b>Unified Service And Execution Company</b> </span></h3> 
                            
                            </div>
                                <p>powering your purchase ,Sales and business</p>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <img className="bannerImg" src={bannarImg} alt="" />
                          </Col>
                      </Row> 
                    </Carousel.Item>
         
      
         </Carousel>
      </Fragment>
    )
  }
}
