import React, { ButtonHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";

import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string | React.ComponentType<IconBaseProps>;
  text: string;
  backgroundColor?: string | undefined;
}
export default function Button({
  icon: Icon,
  text,
  backgroundColor,
  ...rest
}: ButtonProps) {
  return (
    <S.Container backgroundColor={backgroundColor} {...rest}>
      {Icon && <Icon size={20} />}
      <p>{text}</p>
    </S.Container>
  );
}
