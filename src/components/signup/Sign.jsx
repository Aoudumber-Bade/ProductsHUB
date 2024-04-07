import React from 'react'
import Navbar from './../home/navbar/Navbar';
import Signup from './Signup';
import Footer from './../home/footer/Footer';

const Sign = () => {
  return (
    <>
      <Navbar logoName="Electrons"/>
      <Signup />
      <Footer logoName="Electrons"/>
    </>
  )
}

export default Sign
