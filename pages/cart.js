import React, { Component } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Loader from 'react-loader';
import API from '../libs/axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

var options = {lines: 13,length: 20,width: 10,radius: 30,scale: 0.35,corners: 1,color: '#fff',opacity: 0.25,rotate: 0,direction: 1,speed: 1,trail: 60,fps: 20,zIndex: 2e9,top: '50%',left: '50%',shadow: false,hwaccel: false,position: 'absolute'};

class Cart extends Component  {
    constructor(props) {
      super(props)
      this.state = {
          
      }
    
  }
  
  componentDidMount = () => {
  
  
  }
  
  
    render() {
      
    return (
      <>
        
        <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Container>
        
        
       
  
  
        </Container>
        </Layout>
      </>
    );
  }
  }
  
  
  export default Cart