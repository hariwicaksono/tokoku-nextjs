import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from './Footer';

class Layout extends Component {

  render() {
    const { children, home } = this.props;
  
  return (
    <>
      <Head>
      <meta name="description" content="Learn how to build a personal website using Next.js" />
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      
      <main>{children}</main>
      <Footer />
    </>
 );
}
}
export default Layout;
