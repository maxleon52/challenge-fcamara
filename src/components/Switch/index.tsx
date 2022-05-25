import { useState } from "react";
import * as S from "./styles";

function Switch() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <S.Container isChecked={isChecked}>
      <input type="checkbox" onClick={() => setIsChecked(!isChecked)} />
    </S.Container>
  );
}

export default Switch;
