import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import InitialLayout from "../layout/InitialLayout";
import PizzaPage from "../pages/PizzaPage";
import HomePage from "../pages/HomePage";
import DrinkPage from "../pages/DrinkPage";
import DessertPage from "../pages/DessertPage";
import KomboPage from "../pages/KomboPage";
import SaladPage from "../pages/SaladPage";
import SaucePage from "../pages/SaucePage";
import SushiPage from "../pages/SushiPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<InitialLayout />}>
      <Route index element={<HomePage />} />
      <Route path="pizza" element={<PizzaPage />} />
      <Route path="drink" element={<DrinkPage />} />
      <Route path="dessert" element={<DessertPage />} />
      <Route path="kombo" element={<KomboPage />} />
      <Route path="salad" element={<SaladPage />} />
      <Route path="sauce" element={<SaucePage />} />
      <Route path="sushi" element={<SushiPage />} />
    </Route>
  )
);
export default router;
