import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../store";
import { close, goToCart } from "../store/reducers/cart";
import * as S from "./styles";

const Confirmation = () => {
  const dispatch = useDispatch();
  const orderId = useSelector((state: RootReducer) => state.cart.orderId);
  const finish = () => {
    dispatch(close());
    dispatch(goToCart());
  };

  return (
    <>
      <S.Title>Pedido realizado - {orderId}</S.Title>
      <S.Text>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </S.Text>
      <S.Text>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </S.Text>
      <S.Text>
        Lembre-se de higienizar as mãos após o recebimento do pedido, garantindo
        assim sua segurança e bem-estar durante a refeição.
      </S.Text>
      <S.Text>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </S.Text>
      <S.Button type="button" onClick={finish}>
        Concluir
      </S.Button>
    </>
  );
};

export default Confirmation;
