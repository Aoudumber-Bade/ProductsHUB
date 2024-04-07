import React from 'react'
import "./Dev.css"
import { FaFacebook,FaInstagram,FaYoutube  } from "react-icons/fa";
import Aoudumber from "/images/p22.png"
import Aditya from "/images/p2.png"
import Ritesh from "/images/p3.png"
import Vikram from "/images/p4.png"

const SectionHeading = (props) => {
  return (
    <>
       <div className="section-heading">
        <p>{props.hTopTitle}</p>
        <h3>{props.headingTitle}</h3>
       </div>
    </>
  );
}

const Dev = (props) => {

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
    <div class="author" >
      <SectionHeading headingTitle="Web Developers" hTopTitle="CodeMakerrrs"/>
  <div class="author-container">
    <div class="author-box box-2">
      <div class="box-content-a bc2" data-aos="fade-up">
        <img src={Ritesh} className="dimg" alt="this is a author image" />
        <div class="content-a c-box2">
          <h2><span>Ritesh Gawai</span></h2>
          <h3>Backend Developer</h3>
        </div>

        <div class="social-acc sac2">
          <li>
            <a href="#" target="_blank">
            <FaInstagram style={icons.ig} /></a>
          </li>
          <li>
            <a href="#" target="_blank"> <FaFacebook style={icons.fb} /></a>
          </li>

          <li>
            <a href="#"> <FaYoutube style={icons.yt}  /></a>
          </li>
        </div>
      </div>
    </div>

    <div class="author-box">
      <div class="box-content-a bc1" data-aos="fade-down">
        <img src={Aoudumber} className="dimg" alt="this is a author image" />
        <div class="content-a">
          <h2><span>Aoudumber Bade</span></h2>
          <h3>Full Stack Developer</h3>
        </div>

        <div class="social-acc">
          <li>
            <a href="#" target="_blank">
            <FaInstagram style={icons.ig} /></a>
          </li>
          <li>
            <a href="#" target="_blank"><FaFacebook style={icons.fb} /></a>
          </li>

          <li>
            <a href="#"> <FaYoutube style={icons.yt} /></a>
          </li>
        </div>
      </div>
    </div>

    <div class="author-box box-2">
      <div class="box-content-a bc2" data-aos="fade-up">
        <img src={Aditya} className="dimg" alt="this is a author image" />
        <div class="content-a c-box2">
          <h2><span>Aditya Bangar</span></h2>
          <h3>Project Leader</h3>
        </div>

        <div class="social-acc sac2">
          <li>
            <a href="#" target="_blank">
            <FaInstagram style={icons.ig} /></a>
          </li>
          <li>
            <a href="#" target="_blank"><FaFacebook style={icons.fb} /></a>
          </li>

          <li>
            <a href="#"> <FaYoutube style={icons.yt}  /></a>
          </li>
        </div>
      </div>
    </div>

    <div class="author-box">
      <div class="box-content-a bc1" data-aos="fade-down">
        <img src={Vikram} className="dimg" alt="this is a author image" />
        <div class="content-a">
          <h2><span>Vikram Gujar</span></h2>
          <h3>Frontend Developer</h3>
        </div>

        <div class="social-acc">
          <li>
            <a href="#" target="_blank">
            <FaInstagram style={icons.ig} /></a>
          </li>
          <li>
            <a href="#" target="_blank"> <FaFacebook style={icons.fb} /></a>
          </li>

          <li>
            <a href="#"> <FaYoutube style={icons.yt} /></a>
          </li>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Dev
export { SectionHeading};
