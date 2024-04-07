import React from 'react';
import '../../../assets/styles/global.css';
import './blogs.css';
import iPhone from "/images/phone.jpg"
import sam22 from "/images/sam22.jpg"
import { FaApple,FaGoogle,FaMobile   } from "react-icons/fa";
import { TbSquareRoundedLetterS } from "react-icons/tb";
import { MdLooksOne,MdOutlineCropPortrait } from "react-icons/md";


const Blogs = () => {
  return (
    <div className="post-container" id="blog-container">
   <div className="blogs">
     <h2 id="h2">Blog Posts
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
           <p><b>iPhone 14 Pro Max - </b>This past September, or "Apple's month" as some in the tech industry might lovingly refer to the ninth
             month of the year, Cupertino treated us with a whole trove of new hardware that was helmed by the iPhone
             14 family, the Apple Watch Series 8, and AirPods Pro 2nd Gen. </p>
           <a href=".//posts/post.html" className="read-btn">Read More</a>
         </div>
       </div>
     </div>
     <div className="post" data-aos="fade-right">
       <div className="post-img">
         <img src={sam22} alt="" />
       </div>

       <div className="post-cont">
         <div className="cr">
           <h4 className="p-cr"><i className="fa-regular fa-user"></i> Aoudumber Bade</h4>
           <h4 className="p-cr"><i className="fa-sharp fa-regular fa-clock"></i> January 1, 2023</h4>
         </div>

         <div className="h-post">
           <h3>Samsung Galaxy S22 Ultra review </h3>
           <p>
           <b>Samsung Galaxy S22 Ultra 5G</b> is one of the most awaited smartphones of the year. This smartphone is not just for android users but also for Apple iPhone users.
           </p>
           <a href=".//posts/post2.html" className="read-btn">Read More</a>
         </div>
       </div>
     </div>
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
 );
}

export default Blogs;
