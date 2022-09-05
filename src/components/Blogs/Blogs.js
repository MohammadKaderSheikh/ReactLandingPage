import React, { Component, Fragment } from 'react'
import { Col,Card,Button, Container, Row } from 'react-bootstrap'
import blog1 from './../../Asset/image/blog1.png';
export default class Blogs extends Component {
  render() {
    return (
      <Fragment>
        <Container>
       
        <Row className="Blogs sectitle">
        <h1 className="text-left text-info">Blogs</h1>
                   <p className='blogSubTitle'>Reasearch,Intellifence,Reality,transParency</p>
            <Col xlg={3} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '18rem',padding:"0px",height:"440px",marginLeft: "0px" }}>
                    <Card.Img variant="top" src={blog1}  />
                    <Card.Body style={{ padding:"5px" }}>
                    <h3 className="blogTitle">Risk Intelligence</h3>
                    <p className='blogSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                    </Card.Body>
                </Card>
            </Col>
            <Col xlg={3} lg={4} md={6} sm={12} xs={12}>
                <Card style={{ width: '18rem',padding:"0px",height:"440px",marginLeft: "0px" }}>
                    <Card.Img variant="top" src={blog1}  />
                    <Card.Body style={{ padding:"5px" }}>
                    <h3 className="blogTitle">Risk Intelligence</h3>
                    <p className='blogSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                    </Card.Body>
                </Card>
            </Col>
            <Col xlg={3} lg={4} md={6}  sm={12} xs={12}>
                <Card style={{ width: '18rem',padding:"0px",height:"440px",marginLeft: "0px"  }}>
                    <Card.Img variant="top" src={blog1}  />
                    <Card.Body style={{ padding:"5px" }}>
                    <h3 className="blogTitle">Risk Intelligence</h3>
                    <p className='blogSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>
                    </Card.Body>
                </Card>
            </Col>
           
         </Row >
         <Row className="mt-5 sectitle">
         <hr />
                <Col lg={4} md={6} sm={6} className="p-2">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                          <div className="smallBlog">
                          <div>   <img src={blog1} height="100px" width="100px"/></div>
                           <div className="desc">
                           <h5 className="text-justify">Massive Categories</h5>
                            <p className="text-justify ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,   </p>
                           </div>
                          </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={6} sm={6} className="p-2">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                          <div className="smallBlog">
                          <div>   <img src={blog1} height="100px" width="100px"/></div>
                           <div className="desc">
                           <h5 className="text-justify">Smart order</h5>
                            <p className="text-justify ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </p>
                           </div>
                          </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={6} sm={6} className="p-2">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                          <div className="smallBlog">
                          <div>   <img src={blog1} height="100px" width="100px"/></div>
                           <div className="desc">
                           <h5 className="text-justify">Risk Intelligence</h5>
                            <p className="text-justify ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,   </p>
                           </div>
                          </div>
                        </Col>
                    </Row>
                </Col>
                <hr />
         </Row>
        </Container>
      </Fragment>
    )
  }
}
