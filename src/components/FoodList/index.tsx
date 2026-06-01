import FoodCard from "../FoodCard";
import * as S from "./styles";
import { pizza } from "../../assets/images";

const FoodList = () => (
  <div className="container">
    <S.List>
      <FoodCard
        image={pizza}
        title="Pizza Marguerita"
        description="A clássica pizza italiana preparada com ingredientes frescos e muito sabor"
      />
      <FoodCard
        image={pizza}
        title="Pizza Marguerita"
        description="A clássica pizza italiana preparada com ingredientes frescos e muito sabor"
      />
      <FoodCard
        image={pizza}
        title="Pizza Marguerita"
        description="A clássica pizza italiana preparada com ingredientes frescos e muito sabor"
      />
      <FoodCard
        image={pizza}
        title="Pizza Marguerita"
        description="A clássica pizza italiana preparada com ingredientes frescos e muito sabor"
      />
      <FoodCard
        image={pizza}
        title="Pizza Marguerita"
        description="A clássica pizza italiana preparada com ingredientes frescos e muito sabor"
      />
      <FoodCard
        image={pizza}
        title="Pizza Marguerita"
        description="A clássica pizza italiana preparada com ingredientes frescos e muito sabor"
      />
    </S.List>
  </div>
);

export default FoodList;
