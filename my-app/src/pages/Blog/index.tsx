import { lazy } from "react";
import Content from '../../content/BlogContent.json';
import { BlogPost } from "../../components/BlogPostCard/types";
const Container = lazy(() => import("../../common/Container"));
const BlogPostCard = lazy(() => import("../../components/BlogPostCard"));


const Blog = () => {
return (
  <Container>
    <h1>Blog</h1>
    <div style={{
      display: 'flex', flexWrap: 'wrap', justifyContent: 'center',maxWidth: '50rem', marginBlock: '2rem', gap: '2rem'
    }}>
    {Content.blogs.map((blog:BlogPost) => (
      <BlogPostCard
        title={blog.title}
        description={blog.description}
        author={blog.author}
        date={blog.date}
        featureImage={blog.featureImage}
        featureImageAlt={blog.featureImageAlt} />
    ))}
    </div>
  </Container>
  );
};

export default Blog;
