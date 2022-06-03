import styled from "styled-components";

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 8px;

  > h4 {
    max-width: 70%;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
