export default function Footer() {
  return (
    <footer className="wow fadeIn">
      <div className="footer-in">
        <div className="row">
          {/* Logo */}
          <div className="col-lg-5">
            <a href="/" style={{ textDecoration: 'none' }}>
              <h2 
                className="text-white m-0 mb-4" 
                style={{ 
                  fontWeight: 900, 
                  letterSpacing: '2px', 
                  fontSize: '4rem',
                  lineHeight: '1'
                }}
              >
                TK <br />
                SNACKS<span style={{ color: '#ffc107' }}>.</span>
              </h2>
            </a>
          </div>

          {/* Nav links */}
          <div className="col-lg-4">
            <ul className="text-uppercase list-unstyled">
              <li><a href="/">Intro</a></li>
              <li><a href="#your-snacks">Your Snacks</a></li>
              <li><a href="#buy-now">Buy Now</a></li>
              <li><a href="#our-story">Our Story</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-lg-3">
            <h4 className="text-uppercase">Follow the Buzz on</h4>
            <ul className="list-inline flexer-social">
              <li>
                <a className="social-icon" target="_blank" rel="noreferrer" href="#">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a className="social-icon" target="_blank" rel="noreferrer" href="#">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a className="social-icon" target="_blank" rel="noreferrer" href="#">
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a className="social-icon" target="_blank" rel="noreferrer" href="#">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a className="social-icon" target="_blank" rel="noreferrer" href="mailto:hello@example.com">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row copyright" style={{ marginTop: '40px' }}>
          <div className="col-md-12">
            &copy; 2026 TK Snacks. All rights reserved. Built from scratch.
          </div>
        </div>
      </div>
    </footer>
  )
}