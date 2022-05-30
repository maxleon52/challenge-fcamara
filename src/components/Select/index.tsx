import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import * as S from "./styles";

interface OptionsProps {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  name: string;
  options: OptionsProps[];
}

export default function Select({ label, name, options }: SelectProps) {
  const [valueSelected, setValueSelected] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  function handleSelectOption(option: string) {
    setValueSelected(option);
    setIsVisible(false);
  }

  return (
    <S.Container>
      <S.WrapperInput>
        <label htmlFor="name">{label}</label>

        <div className="container-input">
          <input
            type="text"
            value={valueSelected}
            name={name}
            placeholder="Selecione um opção"
            onFocus={() => setIsVisible(true)}
          />
          <FiChevronDown size={15} color="#f39200"/>
        </div>
      </S.WrapperInput>

      <S.Options isVisible={isVisible}>
        {options.map((option) => (
          <p onClick={() => handleSelectOption(option.value)}>{option.label}</p>
        ))}
      </S.Options>
    </S.Container>
  );
}
