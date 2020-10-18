import React, { Component } from 'react';
import Loader from 'react-loader';
import API from '../lib/axios';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import { Container, Row, Col, Card } from 'react-bootstrap';
import UserContext from '../lib/userContext';
import Dashboard from '../components/Dashboard';
import Landing from '../components/Landing';
import Produk from '../components/Produk';
import Slideshow from '../components/Slideshow';

var options = {lines: 13,length: 20,width: 10,radius: 30,scale: 0.35,corners: 1,color: '#fff',opacity: 0.25,rotate: 0,direction: 1,speed: 1,trail: 60,fps: 20,zIndex: 2e9,top: '50%',left: '50%',shadow: false,hwaccel: false,position: 'absolute'};

class GetSlideshow extends Component {
  constructor(props) {
      super(props)
      this.state = {
          Slideshow: []
      }
    
  }
  
  componentDidMount = () => {
    API.GetSlideshow().then(res => {
      this.setState({
          Slideshow: res,
      });
  })
  }
  render() {

      return (
          <>
          <Container>
          
          <Slideshow data={this.state.Slideshow} />
         
</Container>
          </>
      )
  }
}

class GetProduk extends Component {
  constructor(props) {
      super(props)
      this.state = {
          Produk: [],
          cartCount: 0,
          loading: true,
      }
    
  }
  
  componentDidMount = () => {
    API.GetProduk().then(res => {
      setTimeout(() => this.setState({
          Produk: res,
          loading: false
      }), 100);
      const cartData = JSON.parse(localStorage.getItem('cartItem'));
        const cartCount = cartData && cartData.length ? cartData.length : 0;
        this.setState({cartCount: cartCount});
  })

  }
  render() {
    let that = this;
    const cartCount = (cartCount) => {
        that.setState({cartCount: cartCount})
    }
      return (
          <>
          <Container>
          { this.state.loading ?
                        <Loader options={options} className="spinner" />
                        :
                        <>
                      <h3 className="mt-3">Semua Produk</h3>
                         <Produk data={this.state.Produk} totalCnt={cartCount} />
                         </>
          } 
           
              </Container>

          </>
      )
  }
}

export default function Index() {

  return (
    <>
      
      <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <GetSlideshow />
      <UserContext.Consumer >
        {([userContext,]) => {
          if (!userContext) {
            return <GetProduk />
          }

          return <Dashboard />;
        }}
      </UserContext.Consumer>
      </Layout>
    </>
  );
}