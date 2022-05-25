import styled from "styled-components";

interface ContainerProps {
  isChecked: boolean;
}
export const Container = styled.div<ContainerProps>`
  width: 60px;
  height: 35px;
  background: ${({ isChecked }) => (isChecked ? "#F39200" : "#d9e2ef")};
  border-radius: 50px;
  position: relative;

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;

    /* fundo da bola */
    ::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 85%;
      height: 78%;
      background: ${({ isChecked }) => (isChecked ? "#F39200" : "#d9e2ef")};
      border-radius: 50px;
    }

    /* bola */
    ::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translate(7px, -50%);
      width: 25px;
      height: 25px;
      background: #ffffff;
      opacity: 1;
      border-radius: 50px;
      transition: all 0.4s;
    }
  }
  input:checked::after {
    transform: translate(118%, -50%);
    opacity: 1;
  }
`;
