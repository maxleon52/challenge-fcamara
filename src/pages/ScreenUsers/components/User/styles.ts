import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 24px;
  border-radius: 8px;

  > h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
  }

  > div {
    display: flex;
    column-gap: 16px;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  max-width: 277px;

  > input {
    border: none;
    outline: none;
    padding-left: 8px;
    ::placeholder {
      color: #666666;
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: none;
    padding: 6px;
    background-color: #f39200;
    color: #fff;
  }
`;

export const Content = styled.div`
  display: grid;
  row-gap: 8px;
`;

export const ColumnFilter = styled.div`
  display: grid;
  grid-template-columns: 203px 304px 180px auto;
  padding: 16px;

  > button {
    display: flex;
    align-items: center;
    column-gap: 4px;
    width: fit-content;
    border: none;
    font-size: 14px;
    line-height: 17px;
    font-weight: 600;
    letter-spacing: 0em;
    text-align: left;
    background: transparent;

    > div {
      display: grid;
    }
  }
`;

export const ListUsers = styled.div`
  display: grid;
  row-gap: 8px;
`;

export const User = styled.div`
  display: grid;
  grid-template-columns: 203px 304px 180px auto;
  align-items: center;
  padding: 32px 22px;
  background-color: #fff;

  p {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }

  p:nth-child(3) {
    color: #6c757d;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const Name = styled.div`
  small {
    color: #6c757d;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 16px;
    border: none;
    :hover {
      > svg {
        transition: all 0.2s;
        transform: translateY(-4px);
      }
    }
  }
`;
