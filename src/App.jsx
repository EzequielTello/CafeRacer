import { MainRouter } from "./router/MainRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { SocialFooter } from "./components";
import { CartProvider } from "./context";

const App = () => {
  return (
    <div>
      <CartProvider>
        <MainRouter />
      </CartProvider>
      <SocialFooter />
    </div>
  );
};

export default App;
