import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import Category from "../pages/Category";
import { ItemDetailContainer } from "../pages";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};
