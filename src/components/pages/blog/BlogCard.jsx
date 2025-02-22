import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <Link className="overflow-hidden" to={`/blog/blog-detail/${blog.id}`}>
        <img className="blog-image" src={blog.image} alt={blog.title} />
      </Link>
      <div className="blog-info">
        <div className="writer start-dot">
          <img
            src={blog.writer_info.profile_image}
            alt={blog.writer_info.name}
          />
          <span className="fs-5 fw-bold">{blog.writer_info.name}</span>
        </div>
        <span className="fs-5 start-dot">{blog.date}</span>
      </div>
      <Link
        to={`/blogs/blog-detail/${blog.id}`}
        className="blog-title fw-bold fs-3 line-2"
      >
        {blog.title}
      </Link>
      <p className="blog-desc line-2">
        {blog.desc} Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Non.
      </p>
      <Link
        className="blog-read-more-btn fs-5"
        to={`/blogs/blog-detail/${blog.id}`}
      >
        Read more <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default BlogCard;
