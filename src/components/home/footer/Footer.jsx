import React from 'react'
import '../../../assets/styles/global.css'
import './Footer.css'
import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import Logo from '../navbar/Logo';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';



const Footer = (props) => {
  const icons = {
    fb: {
      color: "blue",
      fontSize: "1.2rem"
    },
    ig: {
      color: "#da18a6",
      fontSize: "1.2rem"
    },
    yt: {
      color: "red",
      fontSize: "1.2rem"
    }
  };
  return (
    <>
      <footer class="rg-footer">
    <h1 class="gd-color ft-h span-border">Footer</h1>
    <div class="row">
      <div class="logo-container">
         <div class="logo">{props.logoName}<span>HUB</span></div>
      </div>
      <div class="content">
        <p>electronsHUB@gmail.com</p>
        <p>+91 8788231610</p>
        <p>Chhatrapati Sambhaji Nagar, 431005</p>
      </div>
      </div>
  
     <div class="row">
      <h4>Features</h4>
      <div class="footer-links">
        <li><a href="./about.php">Instructors</a></li>
        <li><a href="./package.php">Packages</a></li>
        <li><a href="./about.php">Carrer</a></li>
        <li><a href="./contactus.php">Locations</a></li>
      </div>
    </div>

    <div class="row">
      <h4>Links</h4>
      <div class="footer-links">
        <li><a href="./about.php">About</a></li>
        <li><a href="./contactus.php">Contact Us</a></li>
        <li><a href="./gallary.php">Gallary</a></li>
        <li><a href="./register.php">Register</a></li>
      </div>
    </div>
 
    <div class="row">
      <h4>Feedback</h4>
      <p>
        Please submit your valueable <br />
        feedback!!
      </p>
      <form method="post" action="">
      <div class="subscribe">
        <input type="email
        " placeholder="Your Email Address" class="email" name="email" />
      <textarea name="message" id="" class="message" placeholder="type here..."></textarea>
      <button class="yellow">Submit</button>
    </div>
      </form>
    </div>
    
    </footer>
  
    <div className="copyright-container">
      <div className="footer-social">
        <a href="#"><FaFacebook style={icons.fb}/></a>
        <a href="#"><FaInstagram style={icons.ig}/></a>
        <a href="#"><FaYoutube style={icons.yt}/></a>
      </div>
      <p>&copy; Electrons All Rights Reserved.</p>
      <p>Designed by - Aoudumber Bade ❤️</p>
    </div>
    </>
  )
}

export default Footer
