import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  row-gap: 8px;
  position: relative;
`;

export const WrapperInput = styled.div`
  display: grid;
  row-gap: 8px;

  > label {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;
    height: fit-content;
  }

  > .container-input {
    position: relative;
    input {
      border: 1px solid #dddddd;
      width: 100%;
      height: 59px;
      border-radius: 4px;
      padding: 20px 24px;
      font-size: 16px;
      :hover {
        cursor: pointer;
      }
    }

    > svg {
      position: absolute;
      top: 40%;
      right: 20px;
    }
  }
`;

interface OptionsProps {
  isVisible: boolean;
}
export const Options = styled.div<OptionsProps>`
  display: ${({ isVisible }) => (isVisible === true ? "grid" : "none")};
  width: 100%;
  height: 130px;
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  top: 110%;
  left: 0px;
  z-index: 1;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #dedede;
    border-radius: 10px;
  }

  > p {
    padding: 8px;
    transition: all 0.2s;
    :hover {
      cursor: pointer;
      background: linear-gradient(
        121deg,
        rgba(243, 146, 0, 1) 43%,
        rgba(255, 255, 255, 1) 95%
      );
      color: #fff;
    }
  }
`;
