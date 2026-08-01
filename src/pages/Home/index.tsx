import Restaurante from "../../models/restaurante";
import Header from "../../components/Header";
import RestaurantCard from "../../components/RestaurantCard";
import Footer from "../../components/Footer";
import * as S from "./styles";

import { useGetRestaurantsQuery } from "../../Services/api";

const Home = () => {
  const {
    data: restaurants,
    isLoading,
    error,
  } = useGetRestaurantsQuery(undefined);

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }
  if (error) {
    return <h1>Erro ao carregar os restaurantes.</h1>;
  }
  return (
    <>
      <Header />
      <div className="container">
        <S.List>
          {restaurants?.map((restaurant: Restaurante) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.titulo}
              rate={restaurant.avaliacao}
              description={restaurant.descricao}
              image={restaurant.capa}
              category={restaurant.tipo}
              featured={restaurant.destacado}
            />
          ))}
        </S.List>
      </div>
      <Footer />
    </>
  );
};

export default Home;
