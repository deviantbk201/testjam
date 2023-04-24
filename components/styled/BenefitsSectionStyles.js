import styled from "styled-components";

export const StyledBenefitsSection = styled.div`
  padding: 12rem;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 4.2rem;
  & .section-heading-box {
    display: flex;
    flex-direction: column;
    flex-gap: 2rem;
    align-items: center;
  }

  & .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    column-gap: 4rem;
    row-gap: 4rem;
  }

  & .card {
  }
  & .card-img-box {
    width: 100%;
    height: 24rem;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
    margin-bottom: 2.4rem;
  }
  & .card-img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  & .card-details {
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: scale(1.1);
      background-color: ${({ theme }) => theme.color.secondaryDark};
      border-radius: 8px;
      & .card-text,
      .card-title {
        color: ${({ theme }) => theme.color.white};
      }
    }
  }

  & .card-title {
    margin-bottom: 0;
    font-weight: 700;
  }
  & .card-text {
    padding: 2rem;
  }
`;
