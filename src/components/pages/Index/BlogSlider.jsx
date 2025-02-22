import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogCard from '../blog/BlogCard';
import blog1 from '../../../assets/images/blogs/1.webp';
import blog2 from '../../../assets/images/blogs/2.webp';
import blog3 from '../../../assets/images/blogs/3.webp';
import blog4 from '../../../assets/images/blogs/4.webp';

const BlogSlider = () => {
  const allBlogs = [
    {
      id: 1,
      title: 'Getting Started with React',
      desc: 'Essential topics to know when stepping into the world of React.',
      image: blog1,
      date: '2025-02-19',
      writer_info: {
        id: 1,
        name: 'Jhon Verdon',
        profile_image:
          'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      },
    },
    {
      id: 2,
      title: 'Backend Development with Express.js',
      desc: 'A guide to creating a simple and fast backend application using Express.js.',
      image: blog2,
      date: '2025-02-18',
      writer_info: {
        id: 1,
        name: 'Jhon Verdon',
        profile_image:
          'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      },
    },
    {
      id: 3,
      title: 'Using PostgreSQL in Your Projects',
      desc: 'Tips on how to effectively use PostgreSQL in your projects.',
      image: blog3,
      date: '2025-02-17',
      writer_info: {
        id: 1,
        name: 'Jhon Verdon',
        profile_image:
          'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      },
    },
    {
      id: 3,
      title: 'Using PostgreSQL in Your Projects',
      desc: 'Tips on how to effectively use PostgreSQL in your projects.',
      image: blog4,
      date: '2025-02-17',
      writer_info: {
        id: 1,
        name: 'Jhon Verdon',
        profile_image:
          'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      },
    },
  ];
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={3}
      breakpoints={{
        1400: {
          slidesPerView: 3,
        },

        1200: {
          slidesPerView: 2,
        },

        768: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      }}
      spaceBetween={16}
      autoplay={{ delay: 3000 }}
      speed={1400}
      loop={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
    >
      {allBlogs.map((blog, index) => (
        <SwiperSlide key={index}>
          <BlogCard blog={blog} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogSlider;
