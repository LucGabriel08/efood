import { useParams } from "react-router-dom";

import ProfileHeader from "../../components/PerfilHeader";
import Banner from "../../components/Banner";
import FoodList from "../../components/FoodList";
import Footer from "../../components/Footer";

import { useGetRestaurantsQuery } from "../../Services/api";
const Perfil = () => {
  const { id } = useParams();
  const restaurantId = Number(id);
  const {
    data: restaurants,
    isLoading,
    error,
  } = useGetRestaurantsQuery(undefined, {
    skip: !id,
  });
  if (isLoading) {
    return <h1>Carregando...</h1>;
  }
  if (error) {
    return <h1>Erro ao carregar os restaurantes.</h1>;
  }
  const restaurant = restaurants?.find(
    (item: { id: number }) => item.id === restaurantId,
  );
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
