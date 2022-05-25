import React, { ButtonHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";

import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<ButtonProps>{
  icon?: string | React.ComponentType<IconBaseProps>;
  text: string;
  backgroundColor?: string | undefined;
}
export default function Button({
  icon: Icon,
  text,
  backgroundColor,
}: ButtonProps) {
  return (
    <S.Container backgroundColor={backgroundColor}>
      {Icon && <Icon size={20}/>}
      <p>{text}</p>
    </S.Container>
  );
}
