import styled from "styled-components";

export const StyledHero = styled.div`
  height: 90vh;
  min-width: 100vw;
  display: grid;
  grid-template-rows: max-content 6rem;
  align-items: center;
  justify-items: center;
  grid-column: ${(props) => props.gridColumn || ""};
`;
