import { useParams } from "react-router-dom";
import restaurants from "../../mocks/restaurants";

import ProfileHeader from "../../components/PerfilHeader";
import Banner from "../../components/Banner";
import FoodList from "../../components/FoodList";
import Footer from "../../components/Footer";
import { banner_macarrao } from "../../assets/images";

console.log("banner:", banner_macarrao);

const Perfil = () => {
  const { id } = useParams();

  const restaurant = restaurants.find((item) => item.id === Number(id));

  if (!restaurant) {
    return <h1>Restaurante não encontrado</h1>;
  }

  return (
    <>
      <ProfileHeader />
      <Banner
        image={restaurant!.banner}
        title={restaurant!.title}
        category={restaurant!.category}
      />
      <FoodList />
      <Footer />
    </>
  );
};

export default Perfil;
