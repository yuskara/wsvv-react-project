import React from "react";
import footer_logo from "../../imgs/samen_logo.svg";
import "../../css/HomeFooter.css";

function Footer() {
  return (
    <>
      <div className="div-footer">
        <div className="inner_footer">
          <div id="footer-box2" className="footer-boxes">
            <a href="#">
              <img id="footer-logo" src={footer_logo} alt="logo"></img>
            </a>
            <h1>
              <span>WSVV-</span>FOUNDATION
            </h1>
            <h4 className="footer-box2-text">
              We help future bosses of business. Together, we make better.
            </h4>
          </div>
          <div id="footer-box1" className="footer-boxes">
            <div className="templateHome-footer-menu">
              <h2>Menu</h2>
              <div className="templateHome-footer-menu-link">
                <a href="/">Home</a>
                <a href="/about">About us</a>
                <a href="/Login">Sign In</a>
                <a href="/signUp">Sign Up</a>
              </div>
            </div>
          </div>

          <div id="footer-box3" className="footer-boxes">
            <div className="templateHome-footer-socialMedia">
              <h2>Social Media</h2>
              <div className="templateHome-footer-socialMedia-link">
                <a href="#">
                  <img
                    src="https://toppng.com/uploads/preview/facebook-logo-small-size-11563480515rbrhidrop9.png"
                    alt="facebook"
                  />
                  <span>facebook</span>
                </a>
                <a href="#">
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-twitter-png/blue-logo-twitter-birds-emblem-3.png"
                    alt="twitter"
                  />
                  <span>twitter</span>
                </a>
                <a href="#">
                  <img
                    src="https://insatpress.tn/wp-content/uploads/2019/08/YfpFOL-logo-instagram-free-transparent.png"
                    alt="Instagam"
                  />
                  <span>Instagram</span>
                </a>
                <a href="mailto:someone@example.com">
                  <img
                    src="https://www.freeiconspng.com/uploads/email-icon--flat-gradient-social-iconset--limav-6.png"
                    alt="email"
                  />{" "}
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //  <!-- #copyright-container start --> */}
      <div id="templateHome-bottom-container">
        <div className="templateHome-footer-bottom">
          <h5>
            {" "}
            &copy;{new Date().getFullYear()} samenvvv.com | WSVV Web Development
            Team
          </h5>
        </div>
        <a href="#" className="home-scroll-up">
          <i className="fa fa-angle-double-up"></i>
        </a>
      </div>
    </>
  );
}

export default Footer;
