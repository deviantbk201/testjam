import styled from "styled-components";

export const Burgerbutton = styled.div`
  width: 2rem;
  height: 0.3rem;
  background-color: #000;
  border-radius: 9px;
  position: relative;
  transition: all 0.3s;
  &:before,
  &:after {
    content: "";
    width: 2rem;
    height: 0.3rem;
    position: absolute;
    background-color: #000;
    border-radius: 9px;
  }
  &:before {
    postion: absolute;
    transform: translateY(0.8rem);
    background-color: red;
    width: 1.2rem;
  }
  &:after {
    position: absolute;
    transform: translateY(-0.8rem);
    width: 3rem;
  }
  &:hover {
    transform: scale(1.2);
  }
`;
