import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FiChevronDown, FiChevronUp, FiEdit3, FiTrash } from "react-icons/fi";
import api from "../../../../services/api";

import Button from "../../../../components/Button";
import Switch from "../../../../components/Switch";

import * as S from "./styles";

interface UserProps {
  id: number;
  name: string;
  rede: string;
  email: string;
  profile: string;
  status: boolean;
}

export default function User() {
  const optionsColumn = ["Rede", "Nome", "Perfil", "Status"];

  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await api.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <h2>Usuários</h2>

        <div>
          <S.SearchBox>
            <input type="text" placeholder="Buscar usuário" />

            <button type="button">
              <BiSearch size={15} />
            </button>
          </S.SearchBox>
          <Button text="Novo usuário" />
        </div>
      </S.Header>

      <S.Content>
        <S.ColumnFilter>
          {optionsColumn.map((item, idx) => (
            <button key={idx}>
              {item}
              <div>
                <FiChevronUp size={8} />
                <FiChevronDown size={8} />
              </div>
            </button>
          ))}
        </S.ColumnFilter>

        <S.ListUsers>
          {users.map((user) => (
            <S.User key={user.id}>
              <p>{user.rede}</p>

              <S.Name>
                <p>{user.name}</p>
                <small title={user.email}>{user.email}</small>
              </S.Name>

              <p>{user.profile}</p>

              <S.Status>
                <Switch isActivity={user.status} userId={user.id} />
                <S.WrapperButton>
                  <button>
                    <FiEdit3 size={15} color="#999999" />
                  </button>
                  <button>
                    <FiTrash size={15} color=" #D23A55" />
                  </button>
                </S.WrapperButton>
              </S.Status>
            </S.User>
          ))}
        </S.ListUsers>
      </S.Content>
    </S.Container>
  );
}
