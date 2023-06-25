import router from "./router/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <section style={{ backgroundColor: "#F9F9F9" }}>
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
