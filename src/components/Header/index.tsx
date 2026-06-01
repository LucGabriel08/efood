import * as S from "./styles";
import { logo } from "../../assets/images";

const Header = () => (
  <S.Hero>
    <div className="container">
      <S.Logo src={logo} alt="efood" />
      <S.Title>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </S.Title>
    </div>
  </S.Hero>
);

export default Header;
