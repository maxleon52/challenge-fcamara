import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  row-gap: 8px;

  > label {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;
  }

  > input {
    border: 1px solid #dddddd;
    border-radius: 4px;
    padding: 20px 24px;
    width: 100%;
    height: 59px;
    font-size: 16px;
  }
`;
