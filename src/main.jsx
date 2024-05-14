import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Insurance Page</title>
        <meta name="description" content="This is a Frontend Mentor Challenge." />
        <meta name="author" content="Juan Miranda" />
        <meta name="language" content="en-us" />
        <meta name="theme" content="system" />
        <meta name="siteUrl" content="https://insurance-page-juanmiranda.netlify.app/" />
        <meta name="siteLogo" content="/logo.png" />
      </Helmet>
    </HelmetProvider>
    <App />
  </React.StrictMode>,
)
