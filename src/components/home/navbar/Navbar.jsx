import React, { useEffect } from 'react'
import '../../../assets/styles/global.css'
import './Navbar.css'
import { FaSignInAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  useEffect(() => {
    const navBar = document.getElementById('nav');
    if (navBar) {
      window.addEventListener('scroll', function () {
        navBar.classList[window.scrollY > 100 ? 'add' : 'remove']('active');
      });
    }

    return () => {
      if (navBar) {
        window.removeEventListener('scroll', function () {
          navBar.classList.remove('active');
        });
      }
    };
  }, []);

  const iStyle = {
    login: {
      fontSize:"1.2rem",
      paddingRight:"4px",
      paddingTop:"7px"
    }
  }

  return (
    <>
      <nav class="navbar">
        <div class="logo">{props.logoName}<span>HUB</span></div>
        <div class="nav-links">
          <ul id="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <Link to="/sign" id="red"><FaSignInAlt style={iStyle.login} /> Sign Up</Link>
            <a href="#" id="crossbar" onclick="closeMenuBar()"><i class="fa-solid fa-xmark"></i></a>
          </ul>
        </div>
        <a href="#" id="iconbar" onclick="responsiveMenu()"><i class="fa-solid fa-bars"></i></a>
      </nav>
    </>
  )
}

export default Navbar
