import React from 'react'
import '../../../assets/styles/global.css'
import './categories.css'

const Categories = () => {
  return (
    <div>
      <div className="categories-container">
      <div class="content-box">
      <h1 class="bg">Best Products</h1>
      <p>
        Review your goals twice every day in order to be focused on
        achieving them.
      </p>

      <div class="row1 rowws">
        <div class="cat-col img img1">
          <div class="cat-content">
            <a href="./posts/post.html">
              <h3>Smartphones</h3>
            </a>
          </div>
        </div>
        <div class="cat-col img img2">
          <div class="cat-content">
            <a href="./posts/post4.html">
              <h3>Laptops and Notebooks</h3>
            </a>
          </div>
        </div>
        <div class="cat-col img img3">
          <div class="cat-content">
            <a href="./posts/post3.html">
              <h3>Smart TVs</h3>
            </a>
          </div>
        </div>
        <div class="cat-col img img4">
          <div class="cat-content">
            <a href="./posts/post2.html">
              <h3>Digital Cameras</h3>
            </a>
          </div>
        </div>
        <div class="cat-col img img5">
          <div class="cat-content">
            <a href="./posts/post5.html">
              <h3>Wearable Device</h3>
            </a>
          </div>
        </div>
        <div class="cat-col img img6">
          <div class="cat-content">
            <a href="./posts/post6.html">
              <h3>Smart Home Devices</h3>
            </a>
          </div>
        </div>
        <div class="cat-col img img7">
          <div class="cat-content">
            <a href="./posts/post6.html">
              <h3>Gaming Consoles</h3>
            </a>
          </div>
        </div>
        <div class="cat-col img img8">
          <div class="cat-content">
            <a href="./posts/post6.html">
              <h3>Audio Devices</h3>
            </a>
          </div>
        </div>
      </div>

      <div class="row2 rowws">

      </div>
    </div>
      </div>
    </div>
  )
}

export default Categories
