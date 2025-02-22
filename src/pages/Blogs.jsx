import PageHeader from '../components/layout/PageHeader';
import Container from '../components/layout/Container';
import bgImage from '../assets/images/headers/about.webp';
import BlogCard from '../components/pages/blog/BlogCard';
import blog1 from '../assets/images/blogs/1.webp';
import blog2 from '../assets/images/blogs/2.webp';
import blog3 from '../assets/images/blogs/3.webp';
import blog4 from '../assets/images/blogs/4.webp';
import SectionHeader from '../components/layout/SectionHeader';
import PaginationSection from '../components/pages/blog/PaginationSection';

const Blogs = () => {
  const allBlogs = [
    {
      id: 1,
      title: 'Getting Started with React',
      desc: 'Essential topics to know when stepping into the world of React.',
      image: blog1,
      date: '2025/02/19',
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
      date: '2025/02/18',
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
      date: '2025/02/17',
      writer_info: {
        id: 1,
        name: 'Jhon Verdon',
        profile_image:
          'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      },
    },
    {
      id: 4,
      title: 'Using PostgreSQL in Your Projects',
      desc: 'Tips on how to effectively use PostgreSQL in your projects.',
      image: blog4,
      date: '2025/02/17',
      writer_info: {
        id: 1,
        name: 'Jhon Verdon',
        profile_image:
          'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      },
    },
    {
      id: 5,
      title: 'Backend Development with Express.js',
      desc: 'A guide to creating a simple and fast backend application using Express.js.',
      image: blog2,
      date: '2025/02/18',
      writer_info: {
        id: 1,
        name: 'Jhon Verdon',
        profile_image:
          'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      },
    },
    {
      id: 6,
      title: 'Using PostgreSQL in Your Projects',
      desc: 'Tips on how to effectively use PostgreSQL in your projects.',
      image: blog3,
      date: '2025/02/17',
      writer_info: {
        id: 1,
        name: 'Jhon Verdon',
        profile_image:
          'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      },
    },
    {
      id: 7,
      title: 'Getting Started with React',
      desc: 'Essential topics to know when stepping into the world of React.',
      image: blog1,
      date: '2025/02/19',
      writer_info: {
        id: 1,
        name: 'Jhon Verdon',
        profile_image:
          'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      },
    },
    {
      id: 8,
      title: 'Backend Development with Express.js',
      desc: 'A guide to creating a simple and fast backend application using Express.js.',
      image: blog2,
      date: '2025/02/18',
      writer_info: {
        id: 1,
        name: 'Jhon Verdon',
        profile_image:
          'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      },
    },
  ];
  return (
    <>
      <PageHeader bgImage={bgImage} header={'Blogs'} breadcrumb={'Blogs'} />
      <Container>
        <div className="section-padding">
          <SectionHeader
            title={'Our Blogs'}
            desc={
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quia dolorem voluptatibus nisi molestias adipisci modi cupiditate.'
            }
          />
        </div>
        <div className="blog-grid">
          {allBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="section-padding">
          <PaginationSection />
        </div>
      </Container>
    </>
  );
};

export default Blogs;
