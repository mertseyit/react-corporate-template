import { FaBriefcase } from 'react-icons/fa';
import counterBg from '../../../assets/images/about/counter-bg.webp';
import OneCounterSectionElement from './OneCounterSectionElement';
import Container from '../../layout/Container';
import {
  FaBuildingUser,
  FaEarthEurope,
  FaFaceSmileWink,
} from 'react-icons/fa6';

const CounterSection = () => {
  const counterData = [
    {
      id: 1,
      title: 'Project Completed',
      counterNum: 100,
      numberSide: '+',
      icon: <FaBriefcase className="fs-2" />,
    },
    {
      id: 2,
      title: 'Happy Clients',
      counterNum: 99,
      numberSide: '%',
      icon: <FaFaceSmileWink className="fs-2" />,
    },
    {
      id: 3,
      title: 'Companies',
      counterNum: 20,
      numberSide: '+',
      icon: <FaBuildingUser className="fs-2" />,
    },
    {
      id: 4,
      title: 'Countries',
      counterNum: 10,
      numberSide: '+',
      icon: <FaEarthEurope className="fs-2" />,
    },
  ];
  return (
    <div
      className="bg-counter-overlay section-margin-t section-margin-b"
      style={{ backgroundImage: `url(${counterBg})` }}
    >
      <div className="section-padding ">
        <Container>
          <div className="counter-bg">
            <div className="all-counter-item">
              {counterData.map((data) => (
                <OneCounterSectionElement
                  key={data.id}
                  title={data.title}
                  counterNum={data.counterNum}
                  numberSide={data.numberSide}
                  icon={data.icon}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CounterSection;
