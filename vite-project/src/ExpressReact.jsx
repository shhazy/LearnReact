import {React} from 'react';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet-async';
function ExpressReact(){
return(
 <>
  <Helmet>
             <title>Express React | My Website</title>
             <meta name="description" content="Welcome to the homepage" />
             <meta property="og:title" content="Home | My Website" />
             <meta property="og:description" content="Welcome to the homepage" />
           </Helmet>
 <Navbar />
 <div className='main-wrapper'>
    <h1> Express in React </h1>
    <h2>1. Install dependencies</h2>
    <p>npm install express</p>
    <h2>2. Update vite.config.js</h2>
    <p> 
    <code>
    {'build: {'}<br />
    {'  ssrManifest: true,'}<br />
    {'  rollupOptions: {'}<br />
    {"    input: '/src/entry-server.jsx',"}<br />
    {'  }'}<br />
    {'}'}
  </code>
  </p>
  <h2>3. Update index.html</h2>
 </div>
 </>
)
}

export default ExpressReact;