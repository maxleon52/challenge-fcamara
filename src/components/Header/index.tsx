import { FiChevronDown } from "react-icons/fi";
import * as S from "./styles";

function Header() {
  return (
    <S.Container>
      <S.Options>
        <p>Redes</p>
        <p>
          Produtos <S.Badger>2</S.Badger>
        </p>
        <p>Configurações</p>
      </S.Options>

      <S.CurrentUser>
        <p>João Dasneves</p>
        <FiChevronDown size={15} color="#333333" />
      </S.CurrentUser>
    </S.Container>
  );
}

export default Header;
