import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Nav from '../components/nav';
import Assessments from '../components/assessement';

const Home = () => {
  useEffect(() => {
    const userDetails = sessionStorage.getItem("userDetails")
    if (!userDetails) {
      Router.push('/login');
    }
  });
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Assessments />
    </div>
  )
}

export default Home