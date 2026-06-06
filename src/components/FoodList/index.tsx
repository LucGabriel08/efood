import FoodCard from "../FoodCard";
import * as S from "./styles";

type Food = {
  id: number;
  nome: string;
  foto: string;
  descricao: string;
  porcao: string;
  preco: number;
};

type Props = {
  foods: Food[];
};

const FoodList = ({ foods }: Props) => (
  <div className="container">
    <S.List>
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          image={food.foto}
          title={food.nome}
          description={food.descricao}
          portion={food.porcao}
          price={food.preco}
        />
      ))}
    </S.List>
  </div>
);

export default FoodList;
