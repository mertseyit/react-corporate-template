import Container from '../components/layout/Container';
import AboutSection from '../components/pages/about/AboutSection';
import CounterSection from '../components/pages/about/CounterSection';
import BgVideo from '../components/pages/Index/BgVideo';
import OurPartnersSection from '../components/pages/Index/OurPartnersSection';
import WhatClientsSaysSection from '../components/pages/Index/WhatClientsSaysSection';
import WhyCooseUsSection from '../components/pages/Index/WhyCooseUsSection';

const Index = () => {
  return (
    <>
      <BgVideo />
      <Container>
        <AboutSection />
      </Container>
      <CounterSection />
      <Container>
        <WhyCooseUsSection />
        <OurPartnersSection />
      </Container>
      <WhatClientsSaysSection />
    </>
  );
};

export default Index;
