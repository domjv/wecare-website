import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer position-relative">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">Mentor</span>
            </a>
            <div className="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3">
                <strong>Phone (QLD):</strong> <span>07 2802 4100</span>
                <br />
                <strong>Phone (SA):</strong> <span>08 7094 3113</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@wecaresupport.net</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="/services/community-participation">Community Participation</a>
              </li>
              <li>
                <a href="/services/development-life-skills">Development-Life Skills</a>
              </li>
              <li>
                <a href="/services/personal-care-tasks">Personal Activities/(high)</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            {/* <form action="forms/newsletter.php" method="post" className="php-email-form">
            <div className="newsletter-form">
              <input type="email" name="email"><input type="submit" value="Subscribe" />
            </div>
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your subscription request has been sent. Thank you!</div>
          </form> */}
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">We Care Support</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
        {/* <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div> */}
      </div>
    </footer>
  );
};

export default Footer;
