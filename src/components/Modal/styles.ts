import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 24px;
  padding: 32px;
  width: 407px;
  min-height: 284px;
  background: #ffffff;
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;
