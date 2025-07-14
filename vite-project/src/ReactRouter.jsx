import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet-async';
function R_Router() {

return (
    <>
    <Helmet>
        <title>Home | My Website</title>
        <meta name="description" content="Welcome to the homepage" />
        <meta property="og:title" content="Home | My Website" />
        <meta property="og:description" content="Welcome to the homepage" />
      </Helmet>
    <Navbar />
    <div className='main-wrapper'>
    <h1>Welcome to React Router Dom</h1>
    <p>We have to install "npm install react-router-dom"</p>
    <p>Then we have to import BrowserRouter in App.jsx</p>
    <br></br>
    <Link to="/LoginForm">
        Go to Login Form
    </Link>
    </div>
    </>
);
}
export default R_Router;