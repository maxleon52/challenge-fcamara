import { ChangeEvent, Children, InputHTMLAttributes, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import * as S from "./styles";

interface OptionsProps {
  value: string;
  label: string;
}

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string;
  options: OptionsProps[];
  errors?: any[];
}

export default function Select({
  label,
  name,
  options,
  value,
  onChange,
  errors,
  ...rest
}: SelectProps) {
  const [valueSelected, setValueSelected] = useState(value);
  const [isVisible, setIsVisible] = useState(false);

  function handleSelectOption(option: string) {
    setValueSelected(option);
    setIsVisible(false);

    if (typeof onChange === "function") {
      onChange({
        target: { value: option, name },
      } as unknown as ChangeEvent<HTMLInputElement>);
    }
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
            readOnly
            {...rest}
            style={{
              borderColor:
                errors !== undefined && errors?.length > 0 ? "#EF5350" : "",
            }}
          />
          <FiChevronDown size={15} color="#f39200" />
        </div>
        <p style={{ color: "#EF5350" }}>
          {errors?.map((item) => item.path === name && item.message)}
        </p>
      </S.WrapperInput>

      <S.Options isVisible={isVisible}>
        {/* {Children.map(options, (option) => (
          <p onClick={() => handleSelectOption(option.value)}>{option.label}</p>
        ))} */}

        {options.map((option, idx) => (
          <p key={idx} onClick={() => handleSelectOption(option.value)}>
            {option.label}
          </p>
        ))}
      </S.Options>
    </S.Container>
  );
}
