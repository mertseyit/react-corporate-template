/* eslint-disable react/prop-types */
import { FaAngleRight, FaHouse } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

//!note: tpoPageExist must be same page route. example /blogs
const PageHeader = ({ bgImage, header, breadcrumb, topPageExist }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="page-header-top"
    >
      <div className="content">
        <h5 className="fs-1 text-white">{header}</h5>
        <div className="breadcrumb text-white">
          <Link to={'/'}>
            <FaHouse />
          </Link>
          <span>
            <FaAngleRight />
          </span>
          {topPageExist && (
            <>
              <Link
                to={`/${topPageExist}`}
                style={{ textTransform: 'capitalize' }}
              >
                {topPageExist}
              </Link>
              <span>
                <FaAngleRight />
              </span>
            </>
          )}
          <span>{breadcrumb}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
