import NumberFormat from "react-number-format";

import * as S from "./styles";

export interface InputMaskProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: any) => void;
}

function InputMask({ label, name, value, onChange }: InputMaskProps) {
  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>
      <NumberFormat
        format="###.###.###-##"
        mask="_"
        name={name}
        value={value}
        onChange={onChange}
      />
    </S.Container>
  );
}

export default InputMask;
