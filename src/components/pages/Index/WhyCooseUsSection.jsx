import mainImage from '../../../assets/images/index/1.webp';
import subImage from '../../../assets/images/index/2.webp';
//icons
import lowPrice from '../../../assets/images/icons/low-price.webp';
import productivity from '../../../assets/images/icons/productivity.webp';
import qualityService from '../../../assets/images/icons/quality-service.webp';
import trust from '../../../assets/images/icons/trust.webp';

const WhyCooseUsSection = () => {
  return (
    <div className="section-padding">
      <div className="why-choose-us-box">
        <div className="left-section">
          <div className="page-header right">
            <span className="brand fs-6">TekMarX</span>
            <h5 className="title fs-2">Why Choose Us ?</h5>
            <p className="desc">
              Choosing the right company is crucial for quality service and a
              seamless experience. With years of experience & trust, we ensure
              reliability in every step. Our quality service & support team is
              always ready to assist you, providing solutions tailored to your
              needs. We prioritize fast & effective solutions, helping you save
              time and achieve results efficiently. Additionally, our affordable
              prices & benefits make sure you receive the best value without
              compromising on quality.
            </p>
            <ul className="list-item">
              <li>
                <div>
                  <img src={trust} alt="low price" />
                  <span className="fs-4 fw-bold">Experience & Trust</span>
                </div>
              </li>
              <li>
                <div>
                  <img src={productivity} alt="fast and effective solutions" />
                  <span className="fs-4 fw-bold">
                    Fast & Effective Solutions
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <img src={qualityService} alt="quality service and support" />
                  <span className="fs-4 fw-bold">
                    Quality Service & Support
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <img src={lowPrice} alt="affordable prices and befefits" />
                  <span className="fs-4 fw-bold">
                    Affordable Prices & Benefits
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-section">
          <div className="main-image-box">
            <img src={mainImage} alt="Why choose us" />
            <div className="sub-image-box slide-top">
              <img
                className="bg-shadow-lg"
                src={subImage}
                alt="customers trust us"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCooseUsSection;
