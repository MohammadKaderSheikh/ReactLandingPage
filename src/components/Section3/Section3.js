import React, { Component, Fragment } from 'react';
import { Button, Col,Card, Container, Row } from 'react-bootstrap';
import agriculture from './../../Asset/image/section31png.png';
import Feedingdog from './../../Asset/image/Feedingdog.png';
import worker from './../../Asset/image/worker.png';
import serchpng from './../../Asset/image/serchpng.png';


export default class Section3 extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5 mb-5">
            <Row>
                <Col lg={4} md={5} sm={12}>
                   <h1 className='sectitle'>Search .Enormous . <br /> Esy Rescognize Choose </h1>
                   <h6 className='sectitle'>Want to access precise products from tailored categories?</h6>
                   <p className='sectitle'>AI-driven categories award you exact products from massive collection.</p>
                   <img src="" alt="" />
                   <Button className="buttn"><i className='fas fa-arrow-alt-circle-left'></i>  </Button>  <Button> <i className='far fa-arrow-alt-circle-right'></i> </Button>
                </Col>
                <Col lg={8} md={8} sm={12}>
                    <Row>
                       <Col lg={12} md={12} sm={12}>
                        <select className="select" data-mdb-filter="true">
                            <option value="1">Category</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                            <option value="6">Six</option>
                            <option value="7">Seven</option>
                            <option value="8">Eight</option>
                            <option value="9">Nine</option>
                            <option value="10">Ten</option>
                         </select>
                         <input className="section3Input" type="text" />
                         <Button className=" serc  p-0 m-0" ><img src={serchpng} alt="" /></Button>
                       </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={6} sm={12} >
                        <Card style={{ width: '14rem',padding:"0px",height:"200px",marginLeft: "0px" }}>
                            <Card.Img variant="top" src={Feedingdog}  />
                            <Card.Body style={{ padding:"5px" }}>
                            <h6 className="text-center">Agriculture</h6>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} >
                        <Card style={{ width: '14rem',padding:"0px",height:"200px",marginLeft: "0px" }}>
                            <Card.Img variant="top" src={Feedingdog}  />
                            <Card.Body style={{ padding:"5px" }}>
                            <h6 className="text-center">Agriculture</h6>
                            </Card.Body>
                        </Card>
                           
                        </Col>
                        <Col lg={4} md={6} sm={12} >
                        <Card style={{ width: '14rem',padding:"0px",height:"200px",marginLeft: "0px" }}>
                            <Card.Img variant="top" src={Feedingdog}  />
                            <Card.Body style={{ padding:"5px" }}>
                            <h6 className="text-center">Agriculture</h6>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
