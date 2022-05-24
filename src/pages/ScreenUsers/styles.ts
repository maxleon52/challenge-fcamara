import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Sidebar = styled.div`
  display: grid;
  width: 100%;
  max-width: 230px;
  row-gap: 8px;
  padding: 8px;
`;

interface SidebarItemProps {
  isSelect: boolean;
}
export const SidebarItem = styled.button<SidebarItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 75px;
  border-radius: 6px;
  border: none;
  padding: 25px 20px;
  color: ${({ isSelect }) => isSelect === true && "#ffffff"};
  background: ${({ isSelect }) => (isSelect === true ? "#495057" : "#ffffff")};

  > div {
    display: flex;
    align-items: center;
    column-gap: 8px;

    > p {
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;
