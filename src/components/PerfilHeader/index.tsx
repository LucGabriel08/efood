import { useDispatch, useSelector } from "react-redux";
import { open } from "../store/reducers/cart";
import * as S from "./styles";
import { Container } from "../../styles/Global";
import { logo } from "../../assets/images";

const PerfilHeader = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: any) => state.cart);

  return (
    <S.Container>
      <Container>
        <S.Content>
          <S.Link href="/">Restaurantes</S.Link>
          <S.Logo src={logo} alt="Logo do Efood" />
          <S.Cart onClick={() => dispatch(open())}>
            {items.length} produto(s) no carrinho
          </S.Cart>
        </S.Content>
      </Container>
    </S.Container>
  );
};

export default PerfilHeader;
