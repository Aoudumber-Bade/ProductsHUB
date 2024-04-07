
import React from 'react'
import "../home/blogs/blogs.css"
import { FaApple, FaGoogle, FaMobile } from "react-icons/fa";
import { TbSquareRoundedLetterS } from "react-icons/tb";
import { MdLooksOne, MdOutlineCropPortrait } from "react-icons/md";
import Posts from "./Posts"


const MyPost = () => {

  return (
    <>
      <div className="post-container" id="blog-container">
        <div className="blogs">
          <h2 id="h2">Blog Posts
          </h2>

          {Posts.map((elem) => {
       
            return (
              <div className="post" data-aos="fade-left" key={elem.id}>
              <div className="post-img">
                <img src={elem.imgsrc} alt={elem.title} />
              </div>
    
              <div className="post-cont">
                <div className="cr">
                  <h4 className="p-cr"><i className="fa-regular fa-user"></i> {elem.author}</h4>
                  <h4 className="p-cr"><i className="fa-sharp fa-regular fa-clock"></i> {elem.date}</h4>
                </div>
    
                <div className="h-post">
                  <h3>{elem.title}</h3>
                  <p>{elem.content} </p>
                  {/* Assuming the link is dynamic based on the post, you might want to update it */}
                  <a href={`#`} className="read-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            )
          })}

         
          <a href="./blog.html" className="gt-home" id="btn-post">Load More Posts</a>
        </div>
        <div class="cate" id="categories">
          <h2>Mobiles</h2>

          <a href="./posts/post.html" className="cate-links"><FaApple /> iPhone</a>

          <a href="./posts/post4.html" className="cate-links"><TbSquareRoundedLetterS /> Samsung</a>

          <a href="./posts/post3.html" className="cate-links"><FaGoogle /> Google</a>

          <a href="./posts/post6.html" className="cate-links"><MdLooksOne /> OnePlus</a>

          <a href="./posts/post2.html" className="cate-links"><FaMobile /> Xiaomi</a>

          <a href="./posts/post5.html" className="cate-links"><MdOutlineCropPortrait /> Oppo</a>

        </div>
      </div>
    </>
  )
}
export default MyPost