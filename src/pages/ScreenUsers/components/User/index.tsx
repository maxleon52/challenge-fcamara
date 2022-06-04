/* eslint-disable react-hooks/rules-of-hooks */
import { FormEvent, useEffect, useMemo, useState } from "react";
import { BiSearch } from "react-icons/bi";

import * as yup from "yup";

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
import Modal from "../../../../components/Modal";

import {
  optionsNetwork,
  optionsProfile,
  optionsStore,
} from "../../../../constants/pageUser";

import ResetPassword from "./components/ResetPassword";
import DeleteUser from "./components/DeleteUser";
import Success from "./components/Success";
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
  const schema = yup.object({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "Minimo 3 caracteres"),
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("Preencha com um email válido!"),
    cpf: yup
      .string()
      .required("CPF obrigatório")
      .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF incompleto"),
    profile: yup.string().required("Selecione uma das opções"),
    network: yup.string().required("Selecione uma das opções"),
    store: yup.string().required("Selecione uma das opções"),
  });

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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalState, setModalState] = useState("");
  const [myErrors, setMyErrors] = useState<any[]>([]);

  async function handleStatus(userId: number, status: boolean) {
    try {
      // setIsChecked(!isChecked);
      const response = await api.patch(`/users/${userId}`, {
        status: !status,
      });
      console.log("response switch: ", response);

      forceList();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // console.log("Força Nova Lista!!!");

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
    console.log("tam cpf: ", user.cpf.length);
  }

  async function handleDeleteUser(id: number) {
    try {
      const response = await api.delete(`/users/${id}`);
      if (response.status === 200) {
        setModalState("success");
        setIsOpenModal(true);
        setUserEdit(undefined);
        setIsEdit(false);
        setUpdateList(!updateList);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function onChange(e: any) {
    const { name, value } = e.target;
    console.log({ name: value });
    setUserEdit({ ...userEdit, [name]: value });
  }
  function handleModal(modalState: string, user?: any) {
    setIsOpenModal(!isOpenModal);
    setModalState(modalState);
    if (userEdit === undefined) {
      setUserEdit(user);
    }
  }

  function forceList() {
    setUpdateList(!updateList);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      // const formData = new FormData(e.target as HTMLFormElement);
      // const data = Object.fromEntries(formData);

      console.log({ userEdit });

      if (userEdit?.id !== undefined) {
        await schema.validate(userEdit, { abortEarly: false });
        const response = await api.put(`/users/${userEdit.id}`, userEdit);
        if (response.status === 200) {
          console.log("Atualizou!!!");

          setModalState("success");
          setIsOpenModal(!isOpenModal);
          setMyErrors([]);
          setTimeout(() => {
            setUserEdit(undefined);
            setIsEdit(false);
            setIsNew(false);
          }, 1500);

          // apenas pra forçar a remontagem do componente, o valor não importa
          setUpdateList(!updateList);
        }
      } else {
        console.log({ userEdit });

        await schema.validate(userEdit, { abortEarly: false });
        const response = await api.post("/users", userEdit);
        if (response.status === 201) {
          console.log("criou!!!");

          setUserEdit(undefined);
          setIsOpenModal(!isOpenModal);
          setModalState("success");
          setMyErrors([]);

          setTimeout(() => {
            setIsEdit(false);
            setIsNew(false);
          }, 1500);

          // apenas pra forçar a remontagem do componente, o valor não importa
          setUpdateList(!updateList);
        }
      }
    } catch (err: any) {
      e.preventDefault();
      setMyErrors(err?.inner);
      console.error("err: ", err);
    }
  }

  useEffect(() => {
    // console.log("userEdit aqui: ", userEdit);
    console.log("modalState: ", modalState);
    console.log("myErrors: ", myErrors);
  }, [modalState, myErrors]);

  return (
    <>
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
                  onClick={() =>
                    setUserEdit({ ...userEdit, status: !userEdit?.status })
                  }
                />
                <Button
                  icon={FiZap}
                  text={"Resetar senha"}
                  id="btn-reset"
                  onClick={() => handleModal("resetPassword")}
                />
                <Button
                  form="my-form"
                  icon={FiSave}
                  text={"Salvar alterações"}
                  type="submit"
                />
                <Button
                  icon={FiX}
                  text={"Excluir usuário"}
                  onClick={() => handleModal("deleteUser")}
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
                        onClick={() => handleStatus(user.id, user.status)}
                      />
                      <S.WrapperButton>
                        <button onClick={() => handleEditUser(user)}>
                          <FiEdit3 size={15} color="#999999" />
                        </button>
                        <button onClick={() => handleModal("deleteUser", user)}>
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
                errors={myErrors}
              />
              <InputMask
                value={userEdit?.cpf || ""}
                label="CPF"
                name="cpf"
                onChange={onChange}
                errors={myErrors}
              />
              <Input
                value={userEdit?.email || ""}
                label="E-mail"
                name="email"
                onChange={onChange}
                errors={myErrors}
              />
              <Select
                value={userEdit?.profile || ""}
                label="Perfil de acesso"
                name="profile"
                onChange={onChange}
                options={optionsProfile}
                errors={myErrors}
              />
              <Select
                value={userEdit?.network || ""}
                label="Rede"
                name="network"
                onChange={onChange}
                options={optionsNetwork}
                errors={myErrors}
              />
              <Select
                value={userEdit?.store || ""}
                label="Loja"
                name="store"
                onChange={onChange}
                options={optionsStore}
                errors={myErrors}
              />
            </S.FormUser>
          )}
        </S.Content>
      </S.Container>

      {isOpenModal === true && (
        <Modal openCloseModal={handleModal}>
          {modalState === "resetPassword" && (
            <ResetPassword openCloseModal={handleModal as any} />
          )}
          {modalState === "deleteUser" && (
            <DeleteUser
              openCloseModal={handleModal as any}
              handleDeleteUser={handleDeleteUser}
              userId={userEdit?.id}
            />
          )}
          {modalState === "success" && (
            <Success openCloseModal={handleModal as any} />
          )}
        </Modal>
      )}
    </>
  );
}
