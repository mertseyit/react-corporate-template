import Container from './Container';
import footerLogo from '../../assets/images/logo-footer.png';
import {
  FaAngleRight,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="section-padding">
      <Container>
        <div className="footer-grid">
          <div className="corporate-info">
            <img className="footer-logo" src={footerLogo} alt="TekMarX Logo" />
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              aliquam, nulla optio aut architecto, quo inventore, dolores saepe
              consectetur velit deleniti.
            </p>
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
          </div>
          <div className="usefull-links">
            <div>
              <h5 className="text-white fs-3">Usefull Links</h5>
              <ul>
                <li>
                  <Link className=" text-white" to={'/'}>
                    <FaAngleRight className="fs-4" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to={'/'}>
                    <FaAngleRight />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to={'/'}>
                    <FaAngleRight />
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to={'/'}>
                    <FaAngleRight />
                    Faq
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white fs-3">TekMarX</h5>
              <ul>
                <li>
                  <Link className=" text-white" to={'/'}>
                    <FaAngleRight className="fs-4" />
                    PDPL
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to={'/'}>
                    <FaAngleRight />
                    Clarification Text
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to={'/'}>
                    <FaAngleRight />
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link className="text-white" to={'/'}>
                    <FaAngleRight />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="subscribe">
            <h3 className="fs-2 text-white">Subscribe now</h3>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              repudiandae necessitatibus molestias tenetur unde natus adipisci
              ipsum dolore.
            </p>
            <form>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="text-white"
              />
              <button className="text-white">Subscribe</button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
