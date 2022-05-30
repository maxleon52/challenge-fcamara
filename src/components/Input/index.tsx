import React from "react";

import * as S from "./styles";

interface InputProps {
  label: string;
  name: string;
}

function Input({ label, name }: InputProps) {
  return (
    <S.Container>
      <label htmlFor="name">{label}</label>
      <input type="text" name={name} />
    </S.Container>
  );
}

export default Input;
