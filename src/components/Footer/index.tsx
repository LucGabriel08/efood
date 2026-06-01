import * as S from "./styles";

import { logo, instagram, facebook, twitter } from "../../assets/images";

const Footer = () => (
  <S.Container>
    <S.Logo src={logo} alt="Logo E-Food" />
    <S.SocialLinks>
      <S.SocialLink
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <S.SocialIcon src={instagram} alt="Instagram" />
      </S.SocialLink>
      <S.SocialLink
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <S.SocialIcon src={facebook} alt="Facebook" />
      </S.SocialLink>
      <S.SocialLink
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <S.SocialIcon src={twitter} alt="Twitter" />
      </S.SocialLink>
    </S.SocialLinks>
    <S.Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Text>
  </S.Container>
);

export default Footer;
