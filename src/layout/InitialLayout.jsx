import { useLocation, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import SubNavbar from "../components/navbar/SubNavbar";

const InitialLayout = () => {
  const location = useLocation();
  return (
    <section>
      <>{location.pathname === "/" ? <Navbar /> : <SubNavbar />}</>
      <Outlet />
      <Footer />
    </section>
  );
};
export default InitialLayout;
