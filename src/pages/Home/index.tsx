import Header from "../../components/Header";
import RestaurantCard from "../../components/RestaurantCard";

import { sushi, macarrao } from "../../assets/images";

import * as S from "./styles";

import Footer from "../../components/Footer";

const Home = () => (
  <>
    <Header />
    <div className="container">
      <S.List>
        <RestaurantCard
          id={1}
          title="Hioki Sushi"
          rate={4.9}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          image={sushi}
          category="Japonesa"
          featured
        />
        <RestaurantCard
          id={2}
          title="La Dolce Vita"
          rate={4.7}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={macarrao}
          category="Italiana"
        />
        <RestaurantCard
          id={3}
          title="Hioki Sushi"
          rate={4.9}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          image={sushi}
          category="Japonesa"
        />
        <RestaurantCard
          id={4}
          title="La Dolce Vita"
          rate={4.7}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={macarrao}
          category="Italiana"
        />
        <RestaurantCard
          id={5}
          title="Hioki Sushi"
          rate={4.9}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          image={sushi}
          category="Japonesa"
        />
        <RestaurantCard
          id={6}
          title="La Dolce Vita"
          rate={4.7}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={macarrao}
          category="Italiana"
        />
      </S.List>
    </div>
    <Footer />
  </>
);

export default Home;
