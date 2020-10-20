
import React, { useState } from "react";
import App from 'next/app';
// ensure all pages have Bootstrap CSS
import 'argon-design-system-react/src/assets/css/argon-design-system-react.css?v1.1.0';
import '../styles/global.css';
import 'spin.js/spin.css';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '../lib/userContext';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';


class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    
    return (
      
    <>

    <Navbar />
    <Component {...pageProps} />
    <ToastContainer />

    </>
    );
  }
}

export default MyApp;