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
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        
      <main>{props.children}</main>
      <Footer siteName={siteName}/>
    </>
  )
}
export default Layout;
