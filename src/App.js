import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import FilterBox from "./components/filter_box/FilterModal";

function App() {
  return (
    <section style={{ backgroundColor: "#F9F9F9" }}>
      <RouterProvider router={router} />

      <FilterBox />
    </section>
  );
}

export default App;
