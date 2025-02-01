import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.scss';
import '../../../../styles/global.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    // Close menu when clicking any nav link
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    // navigate('/login') or open modal
    navigate('/login');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div>
      <div className="navContainer">
          <header className="header">
              <nav>
                  <div className="nav__bar">
                      <div className="header_logo_container">
                          <a href="#" target="_blank">
                            <img src="/public/svcc-rotc-logo.png" alt="logo"/>
                          </a>
                          <h3>SVCC ROTC</h3>
                      </div>

                      <div 
                        className="nav__menu__btn" 
                        id="menu-btn"
                        onClick={toggleMenu}
                      >
                        <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
                      </div>
                  </div>

                  <ul 
                    className={`nav__links ${isMenuOpen ? 'open' : ''}`} 
                    onClick={handleNavLinkClick}
                  >
                      <li><a href="#home">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#service">Services</a></li>
                      <li><a href="#explore">Explore</a></li>
                      <li><a href="#contact">Contact</a></li>
                      <button className="nav__btn" onClick={handleLogin}>Sign in</button>
                  </ul>
              </nav>
              
              <div className="section__container header__container" id="home">
                  <p>Integrity - Complexity - Loyalty</p>
                  <h1>Honor God<br />Love your Family<br />Defend your Country</h1>
              </div>
          </header>
      </div>
      <section className="section__container booking__container">
            <form onSubmit={handleSubmit} className="booking__form">
              <div className="input__group">
                <span><i className="ri-questionnaire-line"></i></span>
                <div>
                  <label htmlFor="check-out">What is ROTC?</label>
                </div>
              </div>
              <div className="input__group">
                <span><i className="ri-questionnaire-line"></i></span>
                <div>
                  <label htmlFor="guest">Where is ROTC?</label>
                </div>
              </div>
              <div className="input__group">
                <span><i className="ri-questionnaire-line"></i></span>
                <div>
                  <label htmlFor="check-in">Why Choose ROTC?</label>
                </div>
              </div>
              <div className="input__group input__btn">
                <button type="button" className="nav__btn" onClick={handleLogin}>Sign in</button>
              </div>
            </form>
          </section>
    </div>
  );
};

export default Navbar;
