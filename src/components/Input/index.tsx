import React, { InputHTMLAttributes } from "react";

import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  errors?: any[];
}

function Input({ label, name, errors, ...rest }: InputProps) {
  return (
    <S.Container>
      <label htmlFor="name">{label}</label>
      <input
        style={{ borderColor: errors !== undefined ? "#EF5350" : "" }}
        type="text"
        name={name}
        {...rest}
      />
      {errors?.map(
        (item) =>
          item.path === name && (
            <p style={{ color: "#EF5350" }}>{item.message}</p>
          )
      )}
    </S.Container>
  );
}

export default Input;
