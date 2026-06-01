import * as S from "./styles";
import { Container } from "../../styles/Global";
import { logo } from "../../assets/images";

const PerfilHeader = () => {
  return (
    <S.Container>
      <Container>
        <S.Content>
          <S.Link href="/">Restaurantes</S.Link>
          <S.Logo src={logo} alt="Logo do Efood" />
          <S.Cart>0 produto(s) no carrinho</S.Cart>
        </S.Content>
      </Container>
    </S.Container>
  );
};

export default PerfilHeader;
