import styled from "styled-components";

interface ButtonProps {
  backgroundColor: string | undefined;
}
export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  width: 100%;
  color: #fff;
  padding: 12px 16px;
  border-radius: 4px;
  border: none;
  background: ${({ backgroundColor }) => backgroundColor ?? "#F39200"};

  > p {
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    letter-spacing: 0.025em;
    text-align: left;
  }
`;
