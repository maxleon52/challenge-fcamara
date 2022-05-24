import { useState } from "react";
import { IconBaseProps } from "react-icons";
import { FiChevronRight, FiUsers } from "react-icons/fi";
import { BsListCheck } from "react-icons/bs";

import CurrentContent from "./components/index";

import * as S from "./styles";

interface OptionsProps {
  id: number;
  name: string;
  icon: string | React.ComponentType<IconBaseProps>;
}

export default function ScreenUsers() {
  const [options] = useState<OptionsProps[]>([
    {
      id: 1,
      name: "Usuários",
      icon: FiUsers,
    },
    {
      id: 2,
      name: "Perfis de acesso",
      icon: BsListCheck,
    },
  ]);

  const [currentSelect, setCurrentSelect] = useState(options[0].name);

  return (
    <S.Container>
      <S.Sidebar>
        {options.map(({ id, name, icon: Icon }) => (
          <S.SidebarItem
            key={id}
            onClick={() => setCurrentSelect(name)}
            isSelect={currentSelect === name ? true : false}
          >
            <div>
              <Icon size={18} />
              <p>{name}</p>
            </div>
            <FiChevronRight
              size={15}
              color={currentSelect === name ? "" : "#F39200"}
            />
          </S.SidebarItem>
        ))}
      </S.Sidebar>

      <S.Content>
        <CurrentContent currentSelect={currentSelect}/>
      </S.Content>
    </S.Container>
  );
}
