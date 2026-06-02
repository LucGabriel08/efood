import FoodCard from "../FoodCard";
import * as S from "./styles";
import { pizza } from "../../assets/images";

type Food = {
  id: number;
  title: string;
  image: string;
  description: string;
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
          image={food.image}
          title={food.title}
          description={food.description}
        />
      ))}
    </S.List>
  </div>
);

export default FoodList;
