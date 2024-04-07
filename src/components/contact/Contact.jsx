import React from 'react'
import '../../assets/styles/global.css'
import "./Contact.css"
import Phero from './Phero'
import Map from './Map';
import Cform from './Cform';
import Footer from './../home/footer/Footer';

const Contact = () => {
  return (
    <>
        <Navbar logoName="Electrons"/>
        <Phero heading="Contact Us"/>
        <Map />
        <Cform />
        <Footer logoName="Electrons" />
    </>
  )
}

export default Contact
