import * as S from "./styles";

type Props = {
  image: string;
  title: string;
  description: string;
};

const FoodCard = ({ image, title, description }: Props) => (
  <S.Card>
    <S.Image src={image} alt={title} />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Button>Adicionar</S.Button>
  </S.Card>
);

export default FoodCard;
