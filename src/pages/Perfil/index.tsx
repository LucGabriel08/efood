import ProfileHeader from "../../components/PerfilHeader";
import Banner from "../../components/Banner";
import FoodList from "../../components/FoodList";
import { banner_macarrao } from "../../assets/images";

console.log("banner:", banner_macarrao);

const Perfil = () => {
  return (
    <>
      <ProfileHeader />
      <Banner
        image={banner_macarrao}
        title={"La Dolce Vita Trattoria"}
        category={"Italiana"}
      />
      <FoodList />
    </>
  );
};

export default Perfil;
