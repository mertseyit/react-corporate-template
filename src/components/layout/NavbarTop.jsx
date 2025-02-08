import {
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import Container from './Container';
import { Link } from 'react-router-dom';
import england_flag from '../../assets/images/flags/eng.webp';

const NavbarTop = () => {
  return (
    <div className="bg-primary ">
      <Container>
        <div className="navbar-top">
          <div className="contact-box">
            <div className="contact-item">
              <FaLocationDot className="text-white fs-5" />
              <span className="text-white fs-6">
                189 Akdy Street, Madis, KJ 08033
              </span>
            </div>
            <div className="divider"></div>
            <div className="contact-item">
              <FaPhone className="text-white fs-5" />
              <Link className="tel text-white" to="tel:00000000000">
                <span className=" fs-6">+0 000 000 0000</span>
              </Link>
            </div>
          </div>
          <div className="navbar-top-right">
            <div className="social-media">
              <a href="www.instagram.com" target="_blank">
                <FaInstagram className="text-white fs-5" />
              </a>
              <a href="www.x.com" target="_blank">
                <FaXTwitter className="text-white fs-5" />
              </a>
              <a href="www.linkedin.com" target="_blank">
                <FaLinkedinIn className="text-white fs-5" />
              </a>
              <a href="www.youtube.com" target="_blank">
                <FaYoutube className="text-white fs-5" />
              </a>
            </div>
            <div className="divider"></div>
            <button className="change-language">
              <img src={england_flag} className="change-language" alt="eng" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavbarTop;
