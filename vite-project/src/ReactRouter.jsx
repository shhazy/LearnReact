import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function R_Router() {

return (
    <>
    <h1>Welcome to React Router Dom</h1>
    <p>We have to install "npm install react-router-dom"</p>
    <p>Then we have to import BrowserRouter in App.jsx</p>
    <br></br>
    <Link to="/LoginForm">
        Go to Login Form
    </Link>
    </>
);
}
export default R_Router;