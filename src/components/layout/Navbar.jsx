import { NavLink, useLocation } from 'react-router-dom';
import Container from './Container';
import NavbarTop from './NavbarTop';
import { FaAlignJustify, FaAngleRight } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { toggleMobileMenu } from '../../assets/js/index';
import logo from '../../assets/images/logo.webp';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const handleToggleMobileMenu = () => {
    setIsOpen((pre) => !pre);
  };

  useEffect(() => {
    toggleMobileMenu(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY >= 400) {
        navbar?.classList.add('navbar-fixed');
      } else {
        navbar?.classList.remove('navbar-fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="shadow">
      {location.pathname === '/' && <NavbarTop />}
      <div className="navbar-white">
        <Container>
          <div id="navbar" className="navbar ">
            <img className="logo" src={logo} />
            <div className="box">
              <nav className="nav">
                <NavLink className={'navlink'} to={'/'}>
                  Home
                </NavLink>
                <NavLink className={'navlink'} to={'/about'}>
                  About Us
                </NavLink>
                <NavLink className={'navlink'} to={'/services'}>
                  Services
                </NavLink>
                <NavLink className={'navlink'} to={'/portfolio'}>
                  Portfolio
                </NavLink>
                <NavLink className={'navlink'} to={'/projects'}>
                  Projects
                </NavLink>
                <NavLink className={'navlink'} to={'/blogs'}>
                  Blogs
                </NavLink>
                <NavLink className={'navlink'} to={'/faq'}>
                  Faq
                </NavLink>
                <NavLink className={'navlink'} to={'/pricing'}>
                  Pricing
                </NavLink>
                <NavLink className={'navlink'} to={'/contact'}>
                  Contact
                </NavLink>
              </nav>
              <button
                onClick={handleToggleMobileMenu}
                className="mobile-menu-btn"
              >
                <FaAlignJustify className="fs-3" />
              </button>
            </div>
          </div>
          <div className="mobile-nav-menu close">
            <div className="mobile-nav-hedader">
              <img className="logo mobile-logo" src={logo} />
              <button onClick={handleToggleMobileMenu} className="text-primary">
                <FaAngleRight className="fs-3" />
              </button>
            </div>
            <div className="mobile-nav">
              <NavLink className={'navlink'} to={'/'}>
                Home
              </NavLink>
              <NavLink className={'navlink'} to={'/about'}>
                About Us
              </NavLink>
              <NavLink className={'navlink'} to={'/services'}>
                Services
              </NavLink>
              <NavLink className={'navlink'} to={'/portfolio'}>
                Portfolio
              </NavLink>
              <NavLink className={'navlink'} to={'/projects'}>
                Projects
              </NavLink>
              <NavLink className={'navlink'} to={'/blogs'}>
                Blogs
              </NavLink>
              <NavLink className={'navlink'} to={'/faq'}>
                Faq
              </NavLink>
              <NavLink className={'navlink'} to={'/pricing'}>
                Pricing
              </NavLink>
              <NavLink className={'navlink'} to={'/contact'}>
                Contact
              </NavLink>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
