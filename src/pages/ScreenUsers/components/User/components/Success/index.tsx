import { useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";

import * as S from "./styles";

interface ResetPasswordProps {
  openCloseModal: () => void;
}

function ResetPassword({ openCloseModal }: ResetPasswordProps) {
  useEffect(() => {
    setTimeout(() => {
      openCloseModal();
    }, 1500);
  }, [openCloseModal]);

  return (
    <>
      <S.WrapperIcon>
        <FiCheckCircle color="#42BA96" size={120} />
      </S.WrapperIcon>

      <S.WrapperTexts>
        <h4>Informações salvas com sucesso!</h4>
      </S.WrapperTexts>
    </>
  );
}

export default ResetPassword;
