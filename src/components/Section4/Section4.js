import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import analisis from './../../Asset/image/analisis.png';
import delivary from './../../Asset/image/delivary.png';
import execution from './../../Asset/image/execution.png';
import feedbackpng from './../../Asset/image/feedbackpng.png';
export default class Section4 extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row>
                <Col className=' text-center' lg={12} md={12} sm={12}>
                   <h1 className='reser '>Research .Solution .Execution .Fulfillment</h1>
                   <h6 className="reser1">We are doing with technologies and expertise: Deliver satisfied business.</h6>
                   <p className="reser2">In-house customization of the most recent technology delivered our service for developing your business, along with our expertise, knowledge, and direct field execution.</p>
                </Col>
            </Row>
            <Row>
                <Col  lg={3} md={4} sm={6}>
                   
                   <div className="card">
                        <div className='researchimg'>
                        <div className="imageback"><img className='cardImg1' src={analisis} alt="" width="60%" /></div>
                        </div>
                        <h3 className='cardTitle'>Risk Intelligence </h3>
                        <p className='cardSubTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat, natus odit perspiciatis nihil assumenda.</p>
                    </div>
                  
                </Col>
                <Col className="item-2" lg={3} md={4} sm={6}>
                   
                   <div className="card">
                        <div className='researchimg'>
                        <div className="imageback"><img className='cardImg1' src={execution} alt="" width="60%" /></div>
                        </div>
                        <h3 className='cardTitle'>executions </h3>
                        <p className='cardSubTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat, natus odit perspiciatis nihil assumenda.</p>
                    </div>
                  
                </Col>
                <Col className='item-3' lg={3} md={4} sm={6}>
                   
                   <div className="card">
                        <div className='researchimg'>
                        <div className="imageback"><img className='cardImg1' src={delivary} alt="" width="60%" /></div>
                        </div>
                        <h3 className='cardTitle'>Delivery </h3>
                        <p className='cardSubTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat, natus odit perspiciatis nihil assumenda.</p>
                    </div>
                  
                </Col>
                <Col className="item-4" lg={3} md={4} sm={6}>
                   
                   <div className="card">
                        <div className='researchimg'>
                        <div className="imageback"><img className='cardImg1' src={feedbackpng} alt="" width="60%" /></div>
                        </div>
                        <h3 className='cardTitle'>Feedback and support</h3>
                        <p className='cardSubTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat, natus odit perspiciatis nihil assumenda.</p>
                    </div>
                  
                </Col>
               
            </Row>
        </Container>
      </Fragment>
    )
  }
}
