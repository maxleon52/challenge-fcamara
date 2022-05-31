import React, { InputHTMLAttributes } from "react";

import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  name: string;
}

function Input({ label, name, ...rest }: InputProps) {
  return (
    <S.Container>
      <label htmlFor="name">{label}</label>
      <input type="text" name={name} {...rest} />
    </S.Container>
  );
}

export default Input;
