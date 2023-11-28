import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <br/>
    <footer className="footer" >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              viverra justo nec mi vulputate, eget varius arcu aliquam.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul className="social-icons">
  <li><a href="#"><i className="fab fa-facebook"></i></a></li>
  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
  <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
</ul>

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
            </div>
            <div className="col-md-6">
              <p className="text-right">Designed by Your Name</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
