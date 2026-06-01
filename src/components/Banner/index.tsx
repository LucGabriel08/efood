import * as S from "./styles";
import { pizza } from "../../assets/images";

type Props = {
  image: string;
  title: string;
  category: string;
};

const Banner = ({ image, title, category }: Props) => (
  <S.Image style={{ backgroundImage: `url(${image})` }}>
    <S.Content>
      <S.Category>{category}</S.Category>
      <S.Title>{title}</S.Title>
    </S.Content>
  </S.Image>
);

export default Banner;
