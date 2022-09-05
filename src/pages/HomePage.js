import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/Nav';
import Table from 'react-bootstrap/Table';
import { Button, Container } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import Header from '../components/HeaderSection/Header';
import ServiceSection from '../components/SeviceSection/ServiceSection';
import Footer from '../components/Footer/Footer';
import SmartRfq from '../components/SmartRF/SmartRfq';
import ContractTechnology from '../components/ContractTechnology/ContractTechnology';
import SmartTechnology from '../components/SmartTechnology/SmartTechnology';
import Support from '../components/Support/Support';
import RelationShipSection from '../components/RelationShipSection/RelationShipSection';
import Blogs from '../components/Blogs/Blogs';
import Subscribe from '../components/SubscridbeSection/Subscribe';
import Section3 from '../components/Section3/Section3';
import Section4 from '../components/Section4/Section4';

export default function HomePage() {
  
  return (
    <>
    <NavBar/>
    <Header/>
    <ServiceSection/>
    <Section3/>
    <Section4/>
    <SmartRfq/>
    <ContractTechnology/>
    <SmartTechnology/>
    <Support/>
    <RelationShipSection/>
    <Blogs/>
    <Subscribe/>
    <Footer/>
    
    </>
  )
}
