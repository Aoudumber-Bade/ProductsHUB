import React from 'react'
import '../../../assets/styles/global.css'
import './Hero.css'


const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div class="header-content">
        <h1 class="lg-heading text-light">All-time favorite</h1>
        <p class="text-light hm-p">
          iPhone <b>|</b> Samsung <b>|</b> Xiomi <b>|</b> Google
        </p>
        <a href="./blog.html" class="text-red btn btn-primary" target="_blank">Explore More</a>
      </div>
      </div>
    </>
  )
}

export default Hero
