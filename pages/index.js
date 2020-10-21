import React, { Component } from 'react';
import Loader from 'react-loader';
import API from '../lib/axios';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { Container, Row, Col, Card } from 'react-bootstrap';
import UserContext from '../lib/userContext';
import Dashboard from '../components/Dashboard';
import Produk from '../components/produk';
import Slideshow from '../components/slideshow';

var options = {lines: 13,length: 20,width: 10,radius: 30,scale: 0.35,corners: 1,color: '#fff',opacity: 0.25,rotate: 0,direction: 1,speed: 1,trail: 60,fps: 20,zIndex: 2e9,top: '50%',left: '50%',shadow: false,hwaccel: false,position: 'absolute'};

class Index extends Component  {
  constructor(props) {
    super(props)
    this.state = {
        Produk: [],
        Slideshow: [],
        loading: true
    }
  
}

componentDidMount = () => {
  if (!localStorage.getItem('cartItem')) {
    const array = '[]';
    localStorage.setItem('cartItem',array);
  }
    
    API.GetSlideshow().then(res => {
        this.setState({
            Slideshow: res.data,
        });
    })
    API.GetProduk().then(res => {
      setTimeout(() => this.setState({
          Produk: res.data,
          loading: false
      }), 100);
  })


}


  render() {
    
  return (
    <>
      
      <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
      <Slideshow data={this.state.Slideshow} />
      
        {
              this.state.loading ?
              <Loader options={options} className="spinner" />
              :
              <>
              <h3 className="mt-3">Semua Produk</h3>
                 <Produk data={this.state.Produk} totalCnt={this.props.totalCnt} />
              </>
              
          }


      </Container>
      </Layout>
    </>
  );
}
}


export default Index