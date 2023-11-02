import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import "./index.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <div className="app">
      <NavBarComponent />
      <ItemListContainer greeting="Bienvenidos a CafeRacerMotos" />
    </div>
  );
}

export default App;
