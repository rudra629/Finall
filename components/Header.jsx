import { useState, useEffect } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [menuOpen])

  const menuBtnSrc = menuOpen
    ? 'https://www.bazana.in/assets/images/Bazana-Exit.png'
    : 'https://www.bazana.in/assets/images/Bazana-Menu.png'

  return (
    <header>
      {/* Logo */}
      <div className="bazana-logo wow fadeIn">
        <a href="/" style={{ textDecoration: 'none', zIndex: 100, display: 'block' }}>
          <img 
            src="/images/logo.jpg" 
            alt="Grams Logo" 
            style={{ 
              maxHeight: '75px', 
              objectFit: 'contain',
              // Adding a subtle shadow so it pops if the background gets bright
              filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' 
            }} 
          />
        </a>
      </div>

      {/* Hamburger / close button */}
      <div className="menu-button wow fadeIn">
        <img
          src={menuBtnSrc}
          id="menu-button"
          alt="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* Slide-in menu */}
      <div
        id="menu"
        className={`menu fade ${menuOpen ? 'animated fadeInRight' : 'animated fadeOutRight'}`}
        style={{ visibility: menuOpen ? 'visible' : 'hidden', zIndex: 999 }}
      >
        <div className="menu-top">
          <ul className="text-uppercase list-unstyled">
            <li><a href="/">Intro</a></li>
            <li><a href="#your-snacks">Your Snacks</a></li>
            <li><a href="#buy-now">Buy Now</a></li>
            <li><a href="#our-story">Our Story</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>

        <div className="menu-bot">
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
          <p>&copy; 2026 Grams. Built from scratch.</p>
        </div>
      </div>
    </header>
  )
}