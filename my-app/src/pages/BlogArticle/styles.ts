import styled from "styled-components";

export const ArticleHeader = styled("h1")`
  text-transform: capitalize;
`;

export const ArticleSubheader = styled("h2")`
  font-size: 1.375rem;
  font-weight: 500;
  text-transform: capitalize;
  color: #18216d;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const ArticleBlockQuote = styled('blockquote')`
  display:block;
  background: #fff;
  padding: 15px 20px 15px 45px;
  margin: 2rem;
  position: relative;
  
  /*Borders - (Optional)*/
  border-left: 15px solid #18216d;
  border-right: 2px solid #18216d;
  
  -moz-box-shadow: 2px 2px 15px #ccc;
  -webkit-box-shadow: 2px 2px 15px #ccc;
  box-shadow: 2px 2px 15px #ccc;
`;