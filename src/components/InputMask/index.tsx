import NumberFormat from "react-number-format";

import * as S from "./styles";

export interface InputMaskProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: any) => void;
  errors?: any[];
}

function InputMask({ label, name, value, errors, onChange }: InputMaskProps) {
  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>
      <NumberFormat
        format="###.###.###-##"
        mask="_"
        name={name}
        value={value}
        onChange={onChange}
        style={{
          borderColor:
            errors !== undefined && errors?.length > 0 ? "#EF5350" : "",
        }}
      />
      <p style={{ color: "#EF5350" }}>
        {errors?.map((item) => item.path === name && item.message)}
      </p>
    </S.Container>
  );
}

export default InputMask;
