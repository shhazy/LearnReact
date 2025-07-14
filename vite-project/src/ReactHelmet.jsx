import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet-async';
function React_Helmet() {
  // State to store users
  
  return (
    <>
    <Helmet>
            <title>React Helment | My Website</title>
            <meta name="description" content="Welcome to the homepage" />
            <meta property="og:title" content="Home | My Website" />
            <meta property="og:description" content="Welcome to the homepage" />
          </Helmet>
      <Navbar />  
      <div className='main-wrapper'>
      <h1>React Helmet</h1>
         <p>This page has dynamic meta tags and title set using React Helmet.</p>
         <p>Install React Helmet: npm install react-helmet-async </p>
         <p>Import HelmetProvider in main.js </p>
         <p>Update metas under Helmet Tag in component or page at the top  </p>
       </div>
    </>
  );
}

export default React_Helmet;
