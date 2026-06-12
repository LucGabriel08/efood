import { useDispatch } from "react-redux";
import { add, open } from "../store/reducers/cart";

import * as S from "./styles";

type Props = {
  isOpen: boolean;
  image: string;
  title: string;
  description: string;
  portion: string;
  price: number;
  onClose: () => void;
};

const Modal = ({
  isOpen,
  image,
  title,
  description,
  portion,
  price,
  onClose,
}: Props) => {
  const dispatch = useDispatch();
  if (!isOpen) return null;

  const addToCart = () => {
    dispatch(
      add({
        id: Date.now(),
        nome: title,
        descricao: description,
        foto: image,
        porcao: portion,
        preco: price,
      }),
    );
    dispatch(open());
    onClose();
  };

  return (
    <S.Overlay>
      <S.Container>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <S.Image src={image} alt={title} />
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.Portion>Serve: {portion}</S.Portion>
          <S.Button onClick={addToCart}>
            Adicionar ao carrinho - R$ {price.toFixed(2)}
          </S.Button>
        </S.Content>
      </S.Container>
    </S.Overlay>
  );
};

export default Modal;
