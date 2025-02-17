/* eslint-disable react/prop-types */
import CountUp from 'react-countup';

const OneCounterSectionElement = ({ counterNum, title, icon, numberSide }) => {
  return (
    <div className="counter-box text-center">
      <div className="text-white icon">{icon}</div>
      <div>
        <CountUp
          duration={5}
          end={counterNum}
          id="counter-number"
          className="text-white fs-2"
        />

        <span className="text-white fs-2" style={{ marginLeft: '5px' }}>
          {numberSide}
        </span>
      </div>
      <h5 className="text-white fs-4 text-uppercase text-nowrap">{title}</h5>
    </div>
  );
};

export default OneCounterSectionElement;
