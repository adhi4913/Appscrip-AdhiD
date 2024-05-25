
// src/components/Footer.js

import React from 'react';
import './Footer.css'; // You will create this CSS file next

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettä muse.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="button">SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact-info">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <p><img src="\images\IMG_0522.JPG" alt="USD" width="20" height="20" />USD</p>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-section">
          <h4>mettä muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <ul className="social-media">
           <li><img src="\images\IMG_0516.PNG" alt="instagram" width="20" height="20" /></li>
            <li><img src="\images\IMG_0517.PNG" alt="linkedin" width="20" height="20"/></li>
          </ul>
          <h4>mettā muse ACCEPTS</h4>
          <ul className="payment-methods">
            <li><img src="\images\IMG_0511.PNG" alt="Google Pay" /></li>
            <li><img src="\images\IMG_0512.PNG" alt="MasterCard" /></li>
            <li><img src="\images\IMG_0513.PNG" alt="American Express" /></li>
            <li><img src="\images\IMG_0514.PNG" alt="Apple Pay" /></li>
            <li><img src="\images\IMG_0515.PNG" alt="PayPal" /></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
