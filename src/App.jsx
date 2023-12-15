import { MainRouter } from "./router/MainRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { CartProvider } from "./context";

const App = () => {
  return (
    <div>
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </div>
  );
};

export default App;
