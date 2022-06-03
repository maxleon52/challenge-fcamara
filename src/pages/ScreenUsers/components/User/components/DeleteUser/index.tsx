import { FiInfo } from "react-icons/fi";

import * as S from "./styles";

interface DeleteUserProps {
  userId: number;
  openCloseModal: () => void;
  handleDeleteUser: (userId: number) => void;
}

function DeleteUser({
  openCloseModal,
  userId,
  handleDeleteUser,
}: DeleteUserProps) {
  return (
    <>
      <S.WrapperIcon>
        <FiInfo color="#D23A55" size={30} />
      </S.WrapperIcon>

      <S.WrapperTexts>
        <h4>Excluir usuário</h4>
        <p>
          Você deseja excluir este usuário definitvamente? Esta ação não poderá
          ser desfeita.
        </p>
      </S.WrapperTexts>

      <S.WrapperButtons>
        <button type="button" onClick={openCloseModal}>
          Não
        </button>
        <button
          type="button"
          onClick={() => handleDeleteUser(userId)}
        >
          Sim
        </button>
      </S.WrapperButtons>
    </>
  );
}

export default DeleteUser;
