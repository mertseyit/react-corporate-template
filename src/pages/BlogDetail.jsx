import PageHeader from '../components/layout/PageHeader';
import bgImage from '../assets/images/headers/about.webp';
import Container from '../components/layout/Container';
import testBlogTopImage from '../assets/images/blogs/blog-detail.webp';
const BlogDetail = () => {
  return (
    <>
      <PageHeader
        bgImage={bgImage}
        header={'Blog Detail'}
        breadcrumb={'Blog Detail'}
        topPageExist={'blogs'} //note: tpoPageExist must be same page route. example /blogs
      />
      <Container>
        <div className="section-padding">
          <div className="blog-image-container">
            <img className="blog-image" src={testBlogTopImage} alt="" />
          </div>
          <div className="blog-content-container">
            <div>
              <div>
                <div className="blog-info">
                  <div className="writer start-dot">
                    <img
                      src={
                        'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'
                      }
                      alt={'Title'}
                    />
                    <span className="fs-5 fw-bold">Alexander Stone</span>
                  </div>
                  <span className="fs-5 start-dot">12/12/2024</span>
                </div>
                <h2 className="fs-2 blog-main-title">
                  Lorem ipsum, dolor sit amet consectetur adipisicing.
                </h2>
              </div>
              <p className="main-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                placeat quaerat tenetur dicta necessitatibus dolorem obcaecati
                laborum. Sunt delectus harum eos reiciendis aliquam at amet eius
                perferendis saepe vel officiis sint laboriosam veniam
                repudiandae doloremque eveniet adipisci quam quos rem officia
                numquam, nulla deserunt exercitationem dolores! Ipsa et tempore
                neque quaerat obcaecati eos dolor officia veniam aspernatur
                iusto omnis commodi voluptas est soluta, culpa, velit, inventore
                labore. Minima dolorum provident commodi reprehenderit, et
                nostrum amet voluptatibus minus, obcaecati, neque cumque
                repellendus. Enim unde dolorum libero harum dolore quidem
                voluptatibus assumenda cum atque. Incidunt dignissimos rerum
                distinctio eligendi amet itaque commodi pariatur ipsa est sed
                voluptate, ipsam nam. Quis dolorum illum soluta amet accusamus
                eum repudiandae fugit, aut reiciendis porro? Temporibus
                veritatis vero modi. Cupiditate error facilis asperiores
                molestias temporibus pariatur impedit sint numquam alias!
                Consequatur laboriosam itaque quis sint porro numquam vero rerum
                vel reiciendis. Sit magni amet odio laboriosam nam eius numquam
                blanditiis distinctio quo animi fugiat molestiae, at commodi
                iusto, soluta assumenda, nisi alias! Fugit incidunt commodi
                doloremque? Nostrum aut saepe amet eligendi quia, tenetur ipsam
                provident itaque consectetur iure eos dolorem voluptates a atque
                ullam nobis harum dignissimos perspiciatis, exercitationem
                facere possimus recusandae numquam adipisci! Commodi eum
                possimus cum quos rem, iure, at repellat incidunt fugit voluptas
                accusamus repudiandae tempora exercitationem quidem. Ea qui
                dolorem vero
              </p>
              <p className="fw-bold">
                Farklı yazı formatlarında alanlar eklenecek Yorum Eklenecek
                Alıntı eklenecek
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogDetail;
