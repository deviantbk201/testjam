import styled from "styled-components";

export const StyledWhyUsSection = styled.div`
  padding: 6rem;
  background-image: linear-gradient(
    96deg,
    ${({ theme }) => theme.color.secondary} 0% 50%,

    ${({ theme }) => theme.color.secondaryDark} 50% 100%
  );
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & .img-box {
    grid-column: 1 / span 1;
    height: 40vw;
    position: relative;
  }
  & .img {
    object-fit: cover;
  }
  & .text-box {
    grid-column: 2 / span 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & .heading-main {
  }
  & .description {
    line-height: 1.8;
  }

  & .btn {
    box-shadow: 0 2rem 4rem rgba(247, 51, 101, 0.6);
  }
`;
