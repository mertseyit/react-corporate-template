import Container from '../components/layout/Container';
import PageHeader from '../components/layout/PageHeader';
import AboutSection from '../components/pages/about/AboutSection';
import bgImage from '../assets/images/headers/about.webp';
import CounterSection from '../components/pages/about/CounterSection';
import WhyCooseUsSection from '../components/pages/Index/WhyCooseUsSection';

const About = () => {
  return (
    <>
      <PageHeader
        bgImage={bgImage}
        header={'About Us'}
        breadcrumb={'About Us'}
      />
      <Container>
        <AboutSection />
      </Container>
      <CounterSection />
      <Container>
        <WhyCooseUsSection />
      </Container>
    </>
  );
};

export default About;
