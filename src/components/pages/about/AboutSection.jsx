import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import aboutImage from '../../../assets/images/about/about.webp';
const AboutSection = () => {
  return (
    <div className="section-padding">
      <div className="about-container">
        <div className="left-section">
          <img src={aboutImage} alt="About image" />
          <div className="image-top-content slide-top">
            <span className="fs-1">5+</span>
            <span className="fs-4">Years Experience</span>
          </div>
        </div>
        <div className="right-section">
          <div className="page-header right">
            <span className="brand fs-6">TekMarX</span>
            <h5 className="title fs-2">About</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              neque nisi, eaque amet voluptas incidunt doloribus culpa, soluta
              earum reprehenderit suscipit odio sapiente. Totam, possimus rem.
              Similique dolorem laborum tempore quas nemo, beatae fuga veritatis
              iusto, at in labore, rem modi sed aliquid officiis illo?
            </p>
            <ul className="list-content">
              <li>
                <span className="check-circle">
                  <FaCheck />
                </span>
                AI-Driven Innovation
              </li>
              <li>
                <span className="check-circle">
                  <FaCheck />
                </span>
                Global Tech Achievements
              </li>
              <li>
                <span className="check-circle">
                  <FaCheck />
                </span>
                Smart Business Solutions
              </li>
            </ul>
            <div className="redirect-about">
              <a href="/about" className="tmx-btn btn-secondary">
                More Detail
                <FaArrowRightLong />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
