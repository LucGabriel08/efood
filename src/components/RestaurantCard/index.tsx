import * as S from "./styles";
import { estrela } from "../../assets/images";

import { Link } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  rate: number;
  description: string;
  image: string;
  featured?: boolean;
  category: string;
};

const RestaurantCard = ({
  id,
  title,
  rate,
  description,
  image,
  featured,
  category,
}: Props) => (
  <S.Card>
    <S.Image src={image} alt={title} />
    <S.Tags>
      {featured && <S.Tag>Destaque</S.Tag>}
      <S.Tag>{category}</S.Tag>
    </S.Tags>
    <S.Content>
      <S.Infos>
        <S.Title>{title}</S.Title>
        <S.RateContainer>
          <S.Rate>{rate}</S.Rate>
          <S.Star src={estrela} alt="Estrela" />
        </S.RateContainer>
      </S.Infos>
      <S.Description>{description}</S.Description>
      <S.ButtonLink to={`/perfil/${id}`}>
        <S.Button>Saiba mais</S.Button>
      </S.ButtonLink>
    </S.Content>
  </S.Card>
);

export default RestaurantCard;
