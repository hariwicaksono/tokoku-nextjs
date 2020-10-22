import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from './footer';

export const siteName = 'Berkah Utama'
export const siteTitle = 'UD Berkah Utama - Next.js + CI3'

const Layout = props => {
  
  return (
    <>
          <Head>
        
      <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />

      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
</Head>
      <main>{props.children}</main>
      <Footer siteName={siteName}/>
    </>
  )
}
export default Layout;
