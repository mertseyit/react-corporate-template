import Container from '../../layout/Container';
import SectionHeader from '../../layout/SectionHeader';
import BlogSlider from './BlogSlider';

const BlogSlideSection = () => {
  return (
    <div className="section-padding ">
      <SectionHeader
        desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi!'}
        title={'Our Newest Blogs'}
      />
      <div className="section-margin-t">
        <Container>
          <BlogSlider />
        </Container>
      </div>
    </div>
  );
};

export default BlogSlideSection;
