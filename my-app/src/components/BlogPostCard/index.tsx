import { Link } from "react-router-dom";
import { BlogPost } from "./types";
import { BlogCard } from "./styles";

const BlogPostCard = ({featureImage, title, date, description,author, featureImageAlt}:BlogPost) => {

  return (
      <BlogCard>
        <div style={{ width: '100%' }}>
          <img src={featureImage} alt={featureImageAlt} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
        </div>
        <div style={{ padding: '1rem' }}>
          <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
            <Link to={`/post/${title}`}>{title}</Link>
          </h1>
          <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
            <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{author}</p>
            </div>
            <div className="font-medium text-gray-700">
              <p>{date}</p>
            </div>
          </div>
          <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
            {description}
          </p>
          <div className="text-center">
            <Link to={`/post/${title}`}>
              <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
            </Link>
          </div>
        </div>
      </BlogCard>
    );
  }

export default BlogPostCard;