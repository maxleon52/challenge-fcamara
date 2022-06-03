import { FiLock } from "react-icons/fi";

import * as S from "./styles";

interface ResetPasswordProps {
  openCloseModal: () => void;
}

function ResetPassword({ openCloseModal }: ResetPasswordProps) {
  return (
    <>
      <S.WrapperIcon>
        <FiLock color="#F39200" size={30} />
      </S.WrapperIcon>

      <S.WrapperTexts>
        <h4>Resetar senha</h4>
        <p>Você deseja resetar a senha deste usuário?</p>
      </S.WrapperTexts>

      <S.WrapperButtons>
        <button type="button" onClick={openCloseModal}>
          Não
        </button>
        <button type="button">Sim</button>
      </S.WrapperButtons>
    </>
  );
}

export default ResetPassword;
