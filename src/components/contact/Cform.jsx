import React from 'react'
import "./Cform.css"

const Cform = () => {
  return (
    <>
     <div className="contact-us">
        <div className="get-in-toch">
          <p>Aoudumber Bade</p>
          <h3>Get In Touch</h3>
        </div>
        <div className="row-col">
          <div className="contact-col address">
            <div className="bxs">
              <i className="fa fa-home gd-color"></i>
              <span>
                <h5>ElectronsHUB at CIDCO</h5>
                <p>Behind The Prozon Mall</p>
                <p>CIDCO Road, Aurangabad-431005 (MH)</p>
              </span>
            </div>
            <div className="bxs">
              <i className="fa fa-phone gd-color"></i>
              <span>
                <h5>+91 8788231610</h5>
                <p>Monday to Saturday,9 AM to 7 PM</p>
              </span>
            </div>
            <div className="bxs">
            <i className="fa-solid fa-envelope gd-color"></i>
              <span className="em">
                <h5>electronshub@gmail.com</h5>
                <p>Email Your Query</p>
              </span>
            </div>
          </div>
          <div className="contact-col cform bxs">
            <form method="post" action="">
            <fieldset>
            <legend><i className="fa-solid fa-user icons"></i> Name</legend>
            <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="inp-b"
                required
              />
            </fieldset>
            <fieldset>
              <legend><i className="fa-solid fa-envelope icons"></i> Email</legend>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="inp-b"
                required
              />
            </fieldset>
              <fieldset>
              <legend><i className="fa-solid fa-pen icons"></i> Subject</legend>
              <input
                type="text"
                name="subject"
                placeholder="Enter Your Subject"
                className="inp-b"
                required
              />
            </fieldset>
            <fieldset>
              <legend><i className="fa-solid fa-message icons"></i> Message</legend>
              <textarea name="message" placeholder="Massage" rows="2" className="inp-b"></textarea>
            </fieldset>
              <button
                id="redbtn"
                type="submit"
                name="send"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cform
