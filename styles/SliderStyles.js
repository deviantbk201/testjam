import styled, { keyframes } from "styled-components";

const AnimatedSlider = keyframes` 
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100px * 12));
  }
`;

export const StyledSlider = styled.div`
  width: 80vw;
  display: flex;
  overflow: hidden;
  gap: 4rem;
  padding: 2rem;

  & .slide {
    margin-right: 10px;
    animation: 32s linear 0s infinite ${AnimatedSlider};
    animation-direction: alternate;
  }
`;
