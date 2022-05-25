import { BiSearch } from "react-icons/bi";
import { FiChevronDown, FiChevronUp, FiEdit3, FiTrash } from "react-icons/fi";

import Button from "../../../../components/Button";

import * as S from "./styles";

export default function User() {
  const optionsColumn = ["Rede", "Nome", "Perfil", "Status"];

  return (
    <S.Container>
      <S.Header>
        <h2>Usuários</h2>

        <div>
          <S.SearchBox>
            <input type="text" placeholder="Buscar usuário" />

            <button type="button">
              <BiSearch size={15} />
            </button>
          </S.SearchBox>
          <Button text="Novo usuário" />
        </div>
      </S.Header>

      <S.Content>
        <S.ColumnFilter>
          {optionsColumn.map((item) => (
            <button key={item}>
              {item}
              <div>
                <FiChevronUp size={8} />
                <FiChevronDown size={8} />
              </div>
            </button>
          ))}
        </S.ColumnFilter>

        <S.ListUsers>
          <S.User>
            <p>Drogarias Conviva</p>

            <S.Name>
              <p>André Gomes da Silva</p>
              <small>andre.gomes@drogariasconviva.com.br</small>
            </S.Name>

            <p>Administrador</p>

            <S.Status>
              <span>SWITCH</span>
              <S.WrapperButton>
                <button>
                  <FiEdit3 size={15} color="#999999" />
                </button>
                <button>
                  <FiTrash size={15} color=" #D23A55" />
                </button>
              </S.WrapperButton>
            </S.Status>
          </S.User>
        </S.ListUsers>
      </S.Content>
    </S.Container>
  );
}
