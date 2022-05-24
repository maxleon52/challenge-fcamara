import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 44px;
  background-color: #ffffff;
`;

export const Options = styled.div`
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 42px;

  > p {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }

  p:nth-child(2) {
    display: flex;
    column-gap: 8px;
  }
  p:nth-child(3) {
    color: #f39200;
  }
`;

export const Badger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #d23a55;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
`;

export const CurrentUser = styled.div`
  border: 2px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;

  > p {
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0.025em;
    text-align: left;
  }
`;
