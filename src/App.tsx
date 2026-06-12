import Rotas from "./routes";
import Cart from "./components/Cart";
import { GlobalStyle } from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Rotas />
      <Cart />
    </>
  );
}

export default App;
