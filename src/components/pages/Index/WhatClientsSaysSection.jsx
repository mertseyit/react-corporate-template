import wocsIcon from '../../../assets/images/icons/trusted-by-client.svg';
import doubleCuotesIcon from '../../../assets/images/icons/double-quotes.svg';
import testimonial1 from '../../../assets/images/testimonials/1.webp';
import testimonial2 from '../../../assets/images/testimonials/2.webp';
import testimonial3 from '../../../assets/images/testimonials/3.webp';
import testimonial4 from '../../../assets/images/testimonials/4.webp';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import {
  FaChevronLeft,
  FaMinus,
  FaQuoteLeft,
  FaQuoteRight,
} from 'react-icons/fa';
import { useEffect } from 'react';

const WhatClientsSaysSection = () => {
  const allTestimonials = [
    {
      id: 1,
      image: testimonial1,
      name: 'John Doe',
      position: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      text: 'This platform has completely transformed the way I work. The efficiency and ease of use are unmatched! Our development team has significantly reduced the time spent on debugging and deployment, allowing us to focus more on building innovative solutions. Highly recommended!',
      rate: 5,
    },
    {
      id: 2,
      image: testimonial2,
      name: 'Emily Smith',
      position: 'Marketing Specialist',
      company: 'Creative Ads Co.',
      text: 'I love how intuitive and user-friendly the interface is. It has significantly improved our workflow! Our marketing campaigns have become more efficient, and collaboration between designers and content creators has never been smoother. This tool is a game-changer for our industry.',
      rate: 5,
    },
    {
      id: 3,
      image: testimonial3,
      name: 'Michael Brown',
      position: 'Project Manager',
      company: 'Agile Solutions Ltd.',
      text: 'A fantastic tool that has helped us streamline our processes and enhance team collaboration. Managing multiple projects simultaneously has never been easier, and our productivity has increased significantly. The real-time updates and seamless integration with other tools make it a must-have for any team.',
      rate: 5,
    },
    {
      id: 4,
      image: testimonial4,
      name: 'Sophia Wilson',
      position: 'UI/UX Designer',
      company: 'Pixel Perfect Studio',
      text: 'As a designer, I appreciate the attention to detail. The experience is seamless and visually appealing! The design system and components make it incredibly easy to create stunning interfaces while maintaining consistency across projects. I can’t imagine working without it now!',
      rate: 5,
    },
  ];

  useEffect(() => {
    document.querySelector(
      '.testimonials.right-section .swiper-button-next'
    ).innerHTML = <FaChevronLeft />;
  });

  return (
    <div className="section-margin-t what-clients-says-box">
      <div className="left-section">
        <div className="spinned-items spin">
          <img
            className="icon-around"
            src={wocsIcon}
            alt="Trusted by clients"
          />
        </div>
        <div className="spinned-items">
          <img
            className="icon-inner"
            src={doubleCuotesIcon}
            alt="Trusted by clients"
          />
        </div>
        <div className="page-header right">
          <span className="brand fs-6 text-white">TekMarX</span>
          <h5 className="title fs-2 text-white">
            What Are <br /> Our Clients Say ?
          </h5>
          <p className="desc text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            neque nisi, eaque amet voluptas incidunt doloribus culpa, soluta
            earum reprehenderit suscipit odio sapiente.
          </p>
        </div>
      </div>
      <div className="testimonials right-section">
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={2}
          spaceBetween={10}
          autoplay={{ delay: 3000 }}
          speed={1400}
          loop={true}
          navigation={true}
        >
          {allTestimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-slide bg-shadow-lg">
                <div className="testimonial-box ">
                  <div>
                    <div className="testimonial-header">
                      <img
                        src={testimonial.image}
                        alt={`testimonial ${testimonial.id}`}
                      />
                      <div>
                        <h5 className="fs-3">{testimonial.name}</h5>
                        <div className="statu">
                          <span className="text-italic fs-5">
                            {testimonial.company}
                          </span>
                          <FaMinus />
                          <span className="text-italic fs-5">
                            {testimonial.position}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="testimonial-text">
                      <FaQuoteLeft className="quote-icon start text-secondary" />
                      {testimonial.text}
                      <FaQuoteRight className="quote-icon end text-secondary" />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WhatClientsSaysSection;
