import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProfileHeader from "../../components/PerfilHeader";
import Banner from "../../components/Banner";
import FoodList from "../../components/FoodList";
import Footer from "../../components/Footer";

const Perfil = () => {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setRestaurants(dados);
      });
  }, []);
  const restaurant = restaurants.find((item: any) => item.id === Number(id));
  if (restaurants.length === 0) {
    return <h1>Carregando...</h1>;
  }
  if (!restaurant) {
    return <h1>Restaurante não encontrado</h1>;
  }
  return (
    <>
      <ProfileHeader />
      <Banner
        image={restaurant.capa}
        title={restaurant.titulo}
        category={restaurant.tipo}
      />
      <FoodList foods={restaurant.cardapio} />
      <Footer />
    </>
  );
};

export default Perfil;
