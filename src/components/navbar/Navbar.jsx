import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { MdLocalGroceryStore } from "react-icons/md";
import "../../styles/main-navbar.css";
import PizzaPeace from "../PizzaPeace";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section className="main__navbar">
      <div className="container">
        <div className="main__navbar-top">
          <ul className="main__navbar__top-list">
            <li>
              <a href="#" className="font-inter">
                <HiOutlineLocationMarker size={"1.8rem"} color={"#FF7010"} />
                Moskva
              </a>
            </li>
            <li>
              <Link to="/about" className="font-inter">
                Проверить адрес
              </Link>
            </li>
            <li>
              <p className="font-inter">
                Среднее время доставки*:
                <span>00:24:19</span>
              </p>
            </li>
          </ul>
          <div className="main__navbar__top-right">
            <p className="font-inter">Время работы: с 11:00 до 23:00</p>
            <div className="user__profile font-inter">
              <BsPerson size={"1.8rem"} color={"#FF7010"} />
              Войти в аккаунт
            </div>
          </div>
        </div>
      </div>
      {/* navbar bottom */}
      <div className="line"></div>
      <div className="container">
        <div className="main__navbar__bottom-list">
          <div className="bottom__list-left">
            <PizzaPeace />
          </div>
          <button className="bottom__list-right">
            <MdLocalGroceryStore size={"2rem"} />
            <span>999 ₽</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
