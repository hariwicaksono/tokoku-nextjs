import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import 'spin.js/spin.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/navbar';
import API from '../libs/axios';
import Loader from 'react-loader';

var options = {lines: 13,length: 20,width: 10,radius: 30,scale: 0.35,corners: 1,color: '#fff',opacity: 0.25,rotate: 0,direction: 1,speed: 1,trail: 60,fps: 20,zIndex: 2e9,top: '50%',left: '50%',shadow: false,hwaccel: false,position: 'absolute'};

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
      Pengaturan: [],
      loading: true
    }
  }
  componentDidMount() {
    const cartData = JSON.parse(localStorage.getItem('cartItem'));
    const cartCount = cartData && cartData.length ? cartData.length : 0;
    this.setState({cartCount: cartCount});
    API.GetPengaturan().then(res => {
      setTimeout(() => this.setState({
          Pengaturan: res.data,
          loading: false
      }), 2000);
  })
  }
  render() {
    const { Component, pageProps } = this.props;
    let that = this;
        const cartCount = (cartCount) => {
            that.setState({cartCount: cartCount})
        }
    return (
    <> 
      {
              this.state.loading ?
              <Loader options={options} className="spinner" />
              :
              <>
    <Navbar cartCount={that.state.cartCount} config={this.state.Pengaturan} />
    <Component {...pageProps} totalCnt={cartCount} metaData={this.state.Pengaturan}/>
    </>
              
            }
    <ToastContainer />
    </>
    );
  }
}

export default MyApp;