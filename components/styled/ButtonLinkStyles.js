import styled from "styled-components";

export const StyledButtonLink = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
    font-size: 2rem;
    display: inline-block;
    background-color: #000;

    padding: 1rem 4rem;
    border-radius: 9px;
    text-transform: uppercase;
    color: ${(props) => props.color || (({ theme }) => theme.color.white)};
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }
  &:hover,
  &:visited {
    color: ${(props) => props.colorHover || (({ theme }) => theme.color.white)};

    background-color: ${(props) =>
      props.bgColorhover || (({ theme }) => theme.color.white)};

    transform: translateY(0.2rem);
  }
`;
