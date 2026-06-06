import { useEffect, useState } from "react";
import Header from "../../components/Header";
import RestaurantCard from "../../components/RestaurantCard";
import * as S from "./styles";
import Footer from "../../components/Footer";

const Home = () => {
  const [restaurants, setRestaurants] = useState<any>([]);

  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
      .then((resposta) => {
        return resposta.json();
      })
      .then((dados) => {
        setRestaurants(dados);
      })
      .catch((erro) => {
        console.error(erro);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <S.List>
          {restaurants.map((restaurant: any) => (
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
