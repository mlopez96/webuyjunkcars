import { lazy, useEffect, useState } from "react";
import Content from '../../content/BlogContent.json';
import { useParams } from "react-router-dom";
import { BlogPost } from "../../components/BlogPostCard/types";
import { ArticleHeader, ArticleSubheader, ArticleBlockQuote } from "./styles";
const Container = lazy(() => import("../../common/Container"));


const BlogArticle = () => {
  const [currentArticle, setCurrentArticle] = useState<BlogPost | null>(null);
  const { blogId } = useParams<any>();
  useEffect(() => {
    const currentBlog = Content.blogs.find((blog:BlogPost) => {
      const found = blog.id === blogId
      if (!found) {
        return Content.blogs[0] as BlogPost;
      }
      return blog.id === blogId;
    });
    setCurrentArticle(currentBlog as BlogPost);
  }, [blogId])
return (
  <Container>
    {!currentArticle && (
      <>
        <p>Content is Loading</p>
      </>
    )}
    {currentArticle && (
      <main style={{ margin: '2rem auto' }}>
        <ArticleHeader>{currentArticle.title}</ArticleHeader>
        <div style={{ maxWidth: '1200px' }}>
          <img style={{ width: '100%' }} alt={currentArticle.featureImageAlt} src={currentArticle.featureImage} />
        </div>
        <ArticleBlockQuote>
          <ArticleSubheader>{currentArticle.description}</ArticleSubheader>
        </ArticleBlockQuote>
        {currentArticle.paragraphs && currentArticle.paragraphs.map((paragraph) => (
          <section style={{ margin: '2rem' }}>
            <p style={{ textAlign: 'center' }}>{paragraph}</p>
          </section>
        ))}
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <p>Written by: {currentArticle.author}</p>
          <p>{currentArticle.date}</p>
        </div>
      </main>
    )}
  </Container>
  );
};

export default BlogArticle;
