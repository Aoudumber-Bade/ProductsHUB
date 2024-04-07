import React, { useState } from 'react';
import './Signup.css';
// import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';

const Signup = () => {
  const [signUpStyle, setSignUpStyle] = useState({ top: '500px' });
  const [loginStyle, setLoginStyle] = useState({ top: '0px' });

  const signUpBtn = () => {
    setSignUpStyle({ top: '0px' });
    setLoginStyle({ top: '0px' });
  };

  const loginBtn = () => {
    setSignUpStyle({ top: '-588px' });  
    setLoginStyle({ top: '657px' });    
  };

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
      <div id="container">
        <div id="row-1">
          <div id="col-2" className="coll">
            <div className="t-top">
              <h1 id="hd-1">Welcome Back!</h1>
              <p className="text-light">
                The scenic route is always better.
              </p>
            </div>
            <div className="form-buttons">
            <button type="button" className="btn-1" id="button-f" onClick={loginBtn}>
              SIGN UP
            </button>
            <button type="button" className="btn-1" id="button-s" onClick={signUpBtn}>
              LOGIN
            </button>
            </div>
          </div>
        </div>

        <div id="row2">
          <div id="col-3" className="coll">
            <div className="form-log">
            <form action="" method="POST" style={loginStyle} id="login" class="form" name="form">
                <h1 id="f-hd">Welcome!!!</h1>
                {/* <div class="icons">
                  <FaGoogle syle={icons.fb}/>
                   <FaLinkedin syle={icons.fb}/>
                    <FaFacebook syle={icons.fb}/>
                </div> */}
            <p class="par-1">Login Through Your Email & Password</p>
            
            <div class="inp">
              <i class="fa-regular fa-user"></i>
              <input
              type="text"
              placeholder="Enter Your Name"
              value="" 
              id="rn"
              name="username"
              required
            />
            </div>
          
    
            <div class="inp">
              <i class="fa-regular fa-envelope"></i>
              <input
              type="email"
              placeholder="Your Email Address"
              value=""
              id="se"
              name="lemail"
              required
            />
            </div>
    
            <div class="inp">
              <i class="fa-solid fa-lock"></i>
              <input
              type="password"
              placeholder="Pass"
              value=""
                id="sp"
                name="lpass"
              required
            />
            </div>
                <div id="checkbox">
                  <input type="checkbox"/>
                    <p>Remember Me</p>

                  <button name="login" type="submit"  onClick={signUpBtn}>Forget Password?</button>
                </div>
                <button type="submit" name="login" id="button-2"  onClick={loginBtn}>LOG IN</button>
              </form>
            </div>
            <div className="form-reg">
            <form action="" method="POST"  style={signUpStyle} id="signUp" class="form" name="form">
              <h1 id="f-hd">Create Account</h1>
                
            <p>Or use your email for registration</p>
              
              <div class="inp">
                <i class="fa-regular fa-user"></i>
                <input
                type="text"
                placeholder="Enter Your Name"
                value="" 
                name="name"
                id="rn"
                required
              />
              </div>
    
              <div class="inp">
                <i class="fa-regular fa-envelope"></i>
                <input
                type="email"
                placeholder="Your Email Address"
                value=""
                name="email"
                id="re"
                required
              />
              </div>
    
              <div class="inp">
                <i class="fa-solid fa-lock"></i>
                <input
                type="password"
                placeholder="Create a Password"
                value=""
                name="pass"
                id="rp"
                required
              />
              </div>
    
              <div class="inp">
                <i class="fa-solid fa-lock"></i>
                <input
                type="password"
                placeholder="Confirm the Password"
                value=""
                name="cnf_pass"
                id="rrp"
                required
              />
              </div>
            
              <div id="checkbox">
                <input type="checkbox"/>
                  <p>I agree to Terms and conditions</p>
                
              </div>
              <button type="submit" name="register" class="reg-btn" id="button-2" onclick="register()">Register</button>
            </form>
            </div>
            <div id="forgot">
            <h3>Forgot Password</h3>
            <div>
                <div class="inp">
                  <i class="fa-regular fa-envelope"></i>
                    <input id="fe" type="email" placeholder="Email" required/>
                </div>
                <button type="button" id="button-2" onclick="forgot()">SUBMIT</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
