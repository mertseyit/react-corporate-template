import bgVideo from '../../../assets/media/bg.webm';
import Container from '../../layout/Container';
import TypeAnimationTexts from './TypeAnimation';

const BgVideo = () => {
  return (
    <div className="video-background section-margin-b">
      <video autoPlay muted loop className="background-video">
        <source src={bgVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <Container>
          <div className="box-center">
            <div className="video-top-content">
              <h1 className="fs-1 bg-title text-white">
                Building <span className="text-primary">your</span> <br />{' '}
                digital future
                <span className="text-secondary"> together</span>
              </h1>
            </div>
            <TypeAnimationTexts />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BgVideo;
