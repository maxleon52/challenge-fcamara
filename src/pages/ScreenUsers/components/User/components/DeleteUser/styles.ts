import styled from "styled-components";

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d23a551a;
  border-radius: 50%;
  width: 56px;
  height: 56px;
`;

export const WrapperTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 8px;

  > h4 {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
  }

  > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  column-gap: 16px;

  > button {
    border: 1px solid #dddddd;
    border-radius: 8px;
    padding: 16px 25px;
    background: transparent;
    color: #333333;
    transition: all 0.2s;
    :hover {
      border: 1px solid #f39200;
      background: #f39200;
      color: #fff;
    }
  }
`;
