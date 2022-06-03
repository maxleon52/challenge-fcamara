import * as S from "./styles";

interface ModalProps {
  children: React.ReactNode;
  openCloseModal: (modalState: string) => void;
}

export default function Modal({ openCloseModal, children }: ModalProps) {
  return (
    <S.Container onClick={() => openCloseModal("")}>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
