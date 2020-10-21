
import React, { Component, useState } from "react";
import App from 'next/app';
// ensure all pages have Bootstrap CSS
import 'argon-design-system-react/src/assets/css/argon-design-system-react.css?v1.1.0';
import '../styles/global.css';
import 'spin.js/spin.css';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '../lib/userContext';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';


class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0
    }
  }
  componentDidMount() {
    const cartData = JSON.parse(localStorage.getItem('cartItem'));
    const cartCount = cartData && cartData.length ? cartData.length : 0;
    this.setState({cartCount: cartCount});
  }
  render() {
    const { Component, pageProps } = this.props;
    let that = this;
        const cartCount = (cartCount) => {
            that.setState({cartCount: cartCount})
        }
    return (
      
    <>

    <Navbar cartCount={that.state.cartCount} />
    <Component {...pageProps} totalCnt={cartCount} />
    <ToastContainer />

    </>
    );
  }
}

export default MyApp;