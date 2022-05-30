import { useState } from "react";
import api from "../../services/api";
import * as S from "./styles";

interface SwitchProps {
  isActivity: boolean;
  userId: number;
}
function Switch({ isActivity, userId }: SwitchProps) {
  const [isChecked, setIsChecked] = useState(isActivity);

  async function handleStatus(userId: number) {
    try {
      setIsChecked(!isChecked);
      await api.patch(`/users/${userId}`, {
        status: !isChecked,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.Wrapper>
      <S.Container isChecked={isChecked}>
        <input
          type="checkbox"
          checked={isChecked}
          onClick={() => handleStatus(userId)}
          onChange={() => {}}
        />
      </S.Container>
      <strong>{isChecked ? "Ativo" : "Inativo"}</strong>
    </S.Wrapper>
  );
}

export default Switch;