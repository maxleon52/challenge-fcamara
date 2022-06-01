/* eslint-disable react-hooks/rules-of-hooks */
import { FormEvent, useEffect, useMemo, useState } from "react";
import { BiSearch } from "react-icons/bi";

import {
  FiChevronDown,
  FiChevronUp,
  FiEdit3,
  FiSave,
  FiTrash,
  FiX,
  FiZap,
} from "react-icons/fi";
import api from "../../../../services/api";

import Input from "../../../../components/Input";
import InputMask from "../../../../components/InputMask";
import Button from "../../../../components/Button";
import Switch from "../../../../components/Switch";
import Select from "../../../../components/Select";

import {
  optionsNetwork,
  optionsProfile,
  optionsStore,
} from "../../../../constants/pageUser";

import * as S from "./styles";

interface UserProps {
  id: number;
  name: string;
  cpf: string;
  network: string;
  email: string;
  profile: string;
  store: string;
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
  const [userEdit, setUserEdit] = useState<any>();
  const [isEdit, setIsEdit] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [isReOrder, setIsReOrder] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  const [search, setSearch] = useState("");

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
  }, [updateList]);

  const allUsers = useMemo(() => {
    const lowerSearch = search.toLocaleLowerCase();
    return users.filter((user) =>
      user.name.toLocaleLowerCase().includes(lowerSearch)
    );
  }, [search, users, isReOrder]);

  function reOrder(nameColumn: keyof UserProps) {
    const arrayReordened = users.sort(function (a, b) {
      if (a[nameColumn] > b[nameColumn]) {
        return 1;
      }
      if (a[nameColumn] < b[nameColumn]) {
        return -1;
      }
      return 0;
    });
    setUsers(arrayReordened);
    setIsReOrder(!isReOrder);
  }

  function handleEditUser(user: UserProps) {
    setUserEdit(user);
    setIsNew(false);
    setIsEdit(true);
  }

  async function handleDeleteUser(id: number) {
    try {
      await api.delete(`/users/${id}`);
      setIsEdit(false);
      setUpdateList(!updateList);
    } catch (error) {
      console.log(error);
    }
  }

  function onChange(e: any) {
    const { name, value } = e.target;
    console.log({ name: value });
    setUserEdit({ ...userEdit, [name]: value });
  }

  function forceList() {
    setUpdateList(!updateList);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      // const formData = new FormData(e.target as HTMLFormElement);
      // const data = Object.fromEntries(formData);

      if (userEdit.id !== undefined) {
        const response = await api.put(`/users/${userEdit.id}`, userEdit);
        if (response.status === 200) {
          setIsEdit(false);
          setIsNew(false);
          setUpdateList(!updateList); // apenas pra forçar a remontagem do componente, o valor não importa
        }
      } else {
        const response = await api.post("/users", userEdit);
        if (response.status === 201) {
          setIsEdit(false);
          setIsNew(false);
          setUpdateList(!updateList); // apenas pra forçar a remontagem do componente, o valor não importa
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.Container>
      <S.Header>
        <h2>
          {isNew === false && isEdit === false && "Usuários"}
          {isNew === true && isEdit === false && "Novo usuário"}
          {isEdit === true && "Editar usuário"}
        </h2>

        <div>
          {!isNew && userEdit?.id === undefined && (
            <S.SearchBox>
              <input
                type="text"
                placeholder="Buscar usuário"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button type="button">
                <BiSearch size={15} />
              </button>
            </S.SearchBox>
          )}

          {isNew === false && isEdit === false && (
            <Button text={"Novo usuário"} onClick={() => setIsNew(!isNew)} />
          )}

          {isNew === true && isEdit === false && (
            <Button
              form="my-form"
              icon={FiSave}
              text={"Salvar alterações"}
              type="submit"
            />
          )}

          {isEdit === true && isNew === false && (
            <S.WrapperBtns>
              <Switch
                isActivity={userEdit?.status}
                userId={userEdit?.id}
                forceList={forceList}
              />
              <Button icon={FiZap} text={"Resetar senha"} id="btn-reset" />
              <Button
                form="my-form"
                icon={FiSave}
                text={"Salvar alterações"}
                type="submit"
              />
              <Button
                icon={FiX}
                text={"Excluir usuário"}
                onClick={() => handleDeleteUser(userEdit.id)}
                backgroundColor="#D23A55"
              />
            </S.WrapperBtns>
          )}
        </div>
      </S.Header>

      <S.Content>
        {isEdit === false && isNew === false ? (
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
              {allUsers.map((user) => (
                <S.User key={user.id}>
                  <p>{user.network}</p>

                  <S.Name>
                    <p>{user.name}</p>
                    <small title={user.email}>{user.email}</small>
                  </S.Name>

                  <p>{user.profile}</p>

                  <S.Status>
                    <Switch
                      isActivity={user.status}
                      userId={user.id}
                      forceList={forceList}
                    />
                    <S.WrapperButton>
                      <button onClick={() => handleEditUser(user)}>
                        <FiEdit3 size={15} color="#999999" />
                      </button>
                      <button onClick={() => handleDeleteUser(user.id)}>
                        <FiTrash size={15} color=" #D23A55" />
                      </button>
                    </S.WrapperButton>
                  </S.Status>
                </S.User>
              ))}
            </S.ListUsers>
          </>
        ) : (
          <S.FormUser onSubmit={handleSubmit} id="my-form">
            <Input
              value={userEdit?.name || ""}
              label="Nome do usuário"
              name="name"
              onChange={onChange}
              required
            />
            <InputMask
              value={userEdit?.cpf || ""}
              label="CPF"
              name="cpf"
              onChange={onChange}
            />
            <Input
              value={userEdit?.email || ""}
              label="E-mail"
              name="email"
              onChange={onChange}
              required
            />
            <Select
              value={userEdit?.profile || ""}
              label="Perfil de acesso"
              name="profile"
              onChange={onChange}
              options={optionsProfile}
            />
            <Select
              value={userEdit?.network || ""}
              label="Rede"
              name="network"
              onChange={onChange}
              options={optionsNetwork}
            />
            <Select
              value={userEdit?.store || ""}
              label="Loja"
              name="store"
              onChange={onChange}
              options={optionsStore}
            />
          </S.FormUser>
        )}
      </S.Content>
    </S.Container>
  );
}
