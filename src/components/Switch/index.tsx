import { InputHTMLAttributes } from "react";
import * as S from "./styles";

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  isActivity: boolean;
}
function Switch({ isActivity, ...rest }: SwitchProps) {
  return (
    <S.Wrapper>
      <S.Container isChecked={isActivity} {...rest}>
        <input
          type="checkbox"
          checked={isActivity}
          // onClick={() => handleStatus(userId)}
          onChange={() => {}}
        />
      </S.Container>
      <strong>{isActivity ? "Ativo" : "Inativo"}</strong>
    </S.Wrapper>
  );
}

export default Switch;
