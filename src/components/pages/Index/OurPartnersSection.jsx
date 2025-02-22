import partner1 from '../../../assets/images/partners/client-1.webp';
import partner2 from '../../../assets/images/partners/client-2.webp';
import partner3 from '../../../assets/images/partners/client-3.webp';
import partner4 from '../../../assets/images/partners/client-4.webp';
import partner5 from '../../../assets/images/partners/client-6.webp';
import partner6 from '../../../assets/images/partners/client-6.webp';
import partner7 from '../../../assets/images/partners/client-7.webp';
import partner8 from '../../../assets/images/partners/client-8.webp';

import SectionHeader from '../../layout/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
const OurPartnersSection = () => {
  const allPartners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
  ];
  return (
    <div className="section-padding ">
      <SectionHeader
        title={'Our Partners'}
        desc={
          'Our partners are industry leaders who share our vision for innovation and excellence. Together, we build strong collaborations to deliver outstanding solutions worldwide.'
        }
      />
      <div className="our-partners-box section-margin-t">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={50}
          loop={true}
          autoplay={{ delay: 3000 }}
          speed={1200}
          breakpoints={{
            1440: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 4,
            },
            576: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 3,
            },
          }}
        >
          {allPartners.map((partner, index) => (
            <SwiperSlide key={index}>
              <img
                className="our-partner-img"
                src={partner}
                alt={`partner ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurPartnersSection;
