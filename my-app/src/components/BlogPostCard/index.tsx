import { Link } from "react-router-dom";
import { BlogPost } from "./types";
import { BlogCard, BlogCardTitle, BlogCardNavLink } from "./styles";

const BlogPostCard = ({featureImage, title, id, date, description,author, featureImageAlt}:BlogPost) => {

  return (
      <BlogCard>
        <div style={{ width: '100%' }}>
          <img src={featureImage} alt={featureImageAlt} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
        </div>
        <div style={{ padding: '1rem' }}>
          <BlogCardTitle>
            <Link to={`/blog/${id}`}>{title}</Link>
          </BlogCardTitle>
          <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
            {description}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <p>{author}</p>
            <p>{date}</p>
          </div>
          <div>
            <BlogCardNavLink to={`/blog/${id}`}>
              Continue Reading
            </BlogCardNavLink>
          </div>
        </div>
      </BlogCard>
    );
  }

export default BlogPostCard;