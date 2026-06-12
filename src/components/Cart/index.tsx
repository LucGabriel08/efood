import { useDispatch, useSelector } from "react-redux";
import { close, remove } from "../store/reducers/cart";
import formatPrice from "../../utils/formatPrice";
import * as S from "./styles";
import Prato from "../../models/Pratos";
import { lixeira } from "../../assets/images";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state: any) => state.cart);
  const total = items.reduce((acc: number, item: Prato) => acc + item.preco, 0);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <S.Overlay onClick={() => dispatch(close())} />
      <S.Container>
        <S.CartList>
          {items.map((item: Prato) => (
            <S.CartItem key={item.id}>
              <S.Image src={item.foto} alt={item.nome} />
              <S.Info>
                <S.Title>{item.nome}</S.Title>
                <S.Price>{formatPrice(item.preco)}</S.Price>
                <S.RemoveButton onClick={() => dispatch(remove(item.id))}>
                  <img src={lixeira} alt="Remover" />
                </S.RemoveButton>
              </S.Info>
            </S.CartItem>
          ))}
        </S.CartList>
        <S.Total>
          <span>Total:</span>
          <span>{formatPrice(total)}</span>
        </S.Total>
        <S.Button>Continuar com a entrega</S.Button>
      </S.Container>
    </>
  );
};

export default Cart;
