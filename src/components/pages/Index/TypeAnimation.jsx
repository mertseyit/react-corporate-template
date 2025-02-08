import { TypeAnimation } from 'react-type-animation';

const TypeAnimationTexts = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        'We proudly provide cutting-edge WEB SOLUTIONS',
        1000,
        'We proudly provide cutting-edge INNOVATIVE AI TOOLS',
        1000,
        'We proudly provide cutting-edge SEO OPTIMIZATIONS',
        1000,
        'We proudly provide cutting-edge ENTERPRISE SOLUTIONS',
        1000,
      ]}
      speed={50}
      className="text-white typing-text fs-3"
      repeat={Infinity}
    />
  );
};

export default TypeAnimationTexts;
