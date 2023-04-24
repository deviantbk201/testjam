import styled from "styled-components";

export const StyledFooterSection = styled.div`
  padding: 6rem;
  grid-template-columns: repeat (4, minmax(min-content, 1fr));
  grid-template-rows: repeat(3, min-content);

  & .card-icon-box {
    height: 2rem;
    width: 2rem;
    background-color: ${({ theme }) => theme.color.primary};
    & h2 {
      font-size: 1rem;
    }
  }
  & .contact__card-x {
    display: flex;
    justify-content: space between;
    align-items: center;
  }
`;
