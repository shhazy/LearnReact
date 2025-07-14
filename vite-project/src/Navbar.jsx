import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
function Navbar() {
  // State to store users
  
  return (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/react-helmet">React Helmet</Link></li>
    <li><Link to="/user-list"> UserList</Link></li>
  </ul>
  );
}

export default Navbar;

