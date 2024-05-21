import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>National Brand Coordinator</title>
        <meta property="og:title" content="National Brand Coordinator" />
      </Helmet>
    </div>
  )
}

export default Home
