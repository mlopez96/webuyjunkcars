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
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', maxWidth: '75rem', margin: '2rem 0', gap: '2rem'
      }}>
      {Content.blogs.map((blog:BlogPost) => (
        <BlogPostCard
          id={blog.id}
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
