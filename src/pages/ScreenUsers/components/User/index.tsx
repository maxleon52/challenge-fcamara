import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

import {
  FiChevronDown,
  FiChevronUp,
  FiEdit3,
  FiSave,
  FiTrash,
} from "react-icons/fi";
import api from "../../../../services/api";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Switch from "../../../../components/Switch";
import Select from "../../../../components/Select";

import * as S from "./styles";

interface UserProps {
  id: number;
  name: string;
  network: string;
  email: string;
  profile: string;
  status: boolean;
}

export default function User() {
  const optionsColumn: Array<keyof UserProps> = [
    "network",
    "name",
    "profile",
    "status",
  ];

  const translate: {
    [key: string]: string;
  } = {
    network: "Rede",
    name: "Nome",
    profile: "Perfil",
    status: "Status",
  };

  const [users, setUsers] = useState<UserProps[]>([]);
  const [isNewOrEdit, setIsNewOrEdit] = useState(false);
  // const [usersReOrders, setUsersReOrders] = useState<UserProps[]>([]);

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

  function reOrder(nameColumn: keyof UserProps) {
    const arrayReordened = users.sort(function (a, b) {
      if (a[nameColumn] > b[nameColumn]) {
        return 1;
      }
      if (a[nameColumn] < b[nameColumn]) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    console.log("arrayReordened: ", arrayReordened);
    // setUsersReOrders(reorder);
    setUsers(arrayReordened);
  }

  const options = [
    { value: "Administrador", label: "Administrador" },
    { value: "F/F", label: "F/F" },
    { value: "Gestor rede", label: "Gestor Rede" },
    { value: "Gestor loja", label: "Gestor Loja" },
    { value: "Funcionario loja", label: "Funcionário Loja" },
  ];

  useEffect(() => {
    // setUsers(usersReOrders);
    // console.log("users: ", users);
    console.log("isNewOrEdit: ", isNewOrEdit);
  }, [isNewOrEdit]);

  return (
    <S.Container>
      <S.Header>
        <h2>{isNewOrEdit === true ? "Novo usuário" : "Usuários"}</h2>

        <div>
          {!isNewOrEdit && (
            <S.SearchBox>
              <input type="text" placeholder="Buscar usuário" />

              <button type="button">
                <BiSearch size={15} />
              </button>
            </S.SearchBox>
          )}
          <Button
            icon={isNewOrEdit === true ? FiSave : ""}
            text={isNewOrEdit === true ? "Salvar alterações" : "Novo usuário"}
            onClick={() => setIsNewOrEdit(!isNewOrEdit)}
          />
        </div>
      </S.Header>

      <S.Content>
        {isNewOrEdit === false ? (
          <>
            <S.ColumnFilter>
              {optionsColumn.map((nameColumn, idx) => (
                <button key={idx} onClick={() => reOrder(nameColumn)}>
                  {translate[nameColumn]}
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
                  <p>{user.network}</p>

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
          </>
        ) : (
          <S.FormUser>
            <Input label="Nome do usuário" name="name" />
            <Input label="CPF" name="cpf" />
            <Input label="E-mail" name="email" />
            <Select label="Perfil de acesso" name="network" options={options}/>
          </S.FormUser>
        )}
      </S.Content>
    </S.Container>
  );
}
