import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const PaginationSection = () => {
  return (
    <div className="blog-pagination">
      <button className="fs-5 bg-shadow-lg">
        <FaArrowLeftLong />
        Prev
      </button>
      <ul className="pagination-numbers">
        <li>
          <button> 1</button>
        </li>
        <li>
          <button className="active bg-shadow-lg">2</button>
        </li>
        <li className="sm-d-none">
          <button> 3</button>
        </li>
        <li className="sm-d-none">
          <button> 4</button>
        </li>
        <li>...</li>
        <li>
          <button> 15</button>
        </li>
      </ul>
      <button className="fs-5 bg-shadow-lg">
        Next <FaArrowRightLong />
      </button>
    </div>
  );
};

export default PaginationSection;
