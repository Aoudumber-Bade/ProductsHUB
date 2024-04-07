import React from 'react'
import Navbar from './../home/navbar/Navbar';
import Phero from './../contact/Phero';
import Footer from './../home/footer/Footer';
import MyPost from './MyPost';

const Blog = (props) => {
  return (
    <>
      <Navbar logoName="Electrons"/>
      <Phero heading="Our Blogs" />
      <MyPost />
      <Footer logoName="Electrons"/>
    </>
  )
}

export default Blog
