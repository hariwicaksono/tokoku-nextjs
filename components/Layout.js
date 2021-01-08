import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import Footer from './footer';

class Layout extends Component {

  render() {
    const { children, home } = this.props;
  
  return (
    <>
      <Head>
      <meta name="description" content="Learn how to build a personal website using Next.js" />
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      
      {!home ? 
      <>
      <Container>
      <div className="mb-3">
      <Link href="/" passHref>
              <a>← Kembali</a>
            </Link>
      </div> 
      </Container>
      {children}
      </>
      :
      <>{children}</>
      }
      <Footer />
    </>
 );
}
}
export default Layout;
