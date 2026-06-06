import { useState } from "react";
import * as S from "./styles";
import Modal from "../Modal";

type Props = {
  image: string;
  title: string;
  description: string;
  portion: string;
  price: number;
};

const FoodCard = ({ image, title, description, portion, price }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Card>
        <S.Image src={image} alt={title} />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Button onClick={() => setIsOpen(true)}>Adicionar</S.Button>
      </S.Card>
      <Modal
        isOpen={isOpen}
        image={image}
        title={title}
        description={description}
        portion={portion}
        price={price}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default FoodCard;
