import styled from "styled-components";
import { Link } from "react-router-dom";


export const BlogCard = styled("article")`
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  background: #ECE9E6;
  background: linear-gradient(to right, #FFFFFF, #ECE9E6);
  @media only screen and (max-width: 890px) {
    width: 100%;
  }
`;

export const BlogCardTitle = styled('h2')`
font-weight: 700;
font-size: 2.25rem;
line-height: 2.75rem;

@media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
}
`;

export const BlogCardNavLink = styled(Link)<any>`
  font-size: 1rem;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;