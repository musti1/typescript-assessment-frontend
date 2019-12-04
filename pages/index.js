import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Assessments from '../components/assessement'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
    <Assessments />
  </div>
)

export default Home