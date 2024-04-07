import React from 'react'

const About = () => {
  return (
    <div classNameName="post-container">
    <div className="blogs">
      <h2 className="h2">Blog Posts
      </h2>

      <div className="post" data-aos="fade-left">
        <div className="post-img">
          <img src={iPhone} alt="" />
        </div>

        <div className="post-cont">
          <div className="cr">
            <h4 className="p-cr"><i className="fa-regular fa-user"></i> Aoudumber Bade</h4>
            <h4 className="p-cr"><i className="fa-sharp fa-regular fa-clock"></i> January 1, 2023</h4>
          </div>

          <div className="h-post">
            <h3>Apple iPhone 14 Pro Max Review</h3>
            <p>This past September, or "Apple's month" as some in the tech industry might lovingly refer to the ninth
              month of the year, Cupertino treated us with a whole trove of new hardware that was helmed by the iPhone
              14 family, the Apple Watch Series 8, and AirPods Pro 2nd Gen. </p>
            <a href=".//posts/post.html" className="read-btn">Read More</a>
          </div>
        </div>
      </div>
      <div className="post" data-aos="fade-right">
        <div className="post-img">
          <img src={Xiaomi} alt="" />
        </div>

        <div className="post-cont">
          <div className="cr">
            <h4 className="p-cr"><i className="fa-regular fa-user"></i> Aoudumber Bade</h4>
            <h4 className="p-cr"><i className="fa-sharp fa-regular fa-clock"></i> January 1, 2023</h4>
          </div>

          <div className="h-post">
            <h3>Redmi Note 12 Pro 5G Review </h3>
            <p>
              <b> Xiaomi Redmi Note 12 Pro – </b> Subsequent to sending off the Redmi
              Note 12 5G series in China, Xiaomi has affirmed that it will send
              off a new cell phone under a similar series in the country. The
              forthcoming Redmi Note 12 Expert Speed Release will send off close
              by the Redmi K60 series on December 27th in China.
            </p>
            <a href=".//posts/post2.html" className="read-btn">Read More</a>
          </div>
        </div>
      </div>
      <a href="./blog.html" className="btn-post gt-home">Load More Posts</a>
    </div>
    
    </div>
  )
}

export default About
