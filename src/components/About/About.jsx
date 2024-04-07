import React from 'react'
import Navbar from '../home/navbar/Navbar'
import Phero from './../contact/Phero';
import Footer from './../home/footer/Footer';
import Dev from './../home/devlopers/Dev';

const About = () => {
  return (
    <>
        <Navbar logoName="Electrons"/> 
        <Phero heading="About Us"/>
        <Dev />
        <Footer logoName="Electrons"/>
    </>
  )
}

export default About
