import React from 'react';
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero';
import Categories from './categories/categories';
import Blogs from './blogs/blogs';
import Dev from './devlopers/Dev';
import Footer from './footer/Footer';


const HomePage = () => {
  return (
    <>
        <Navbar logoName="Electrons" />
        <Hero />
        <Categories />
        <Blogs />
        <Dev />
        <Footer logoName="Electrons" />
    </>
  )
}

export default HomePage;
