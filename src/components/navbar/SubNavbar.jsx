import { MdLocalGroceryStore } from "react-icons/md";
import "../../styles/sub-navbar.css";
import PizzaPeace from "../PizzaPeace";
import { NavLink } from "react-router-dom";
const SubNavbar = () => {
  return (
    <section className="sub__navbar">
      <div className="container">
        <div className="sub__navbar-list">
          <div className="sub__navbar__list-left">
            <PizzaPeace />
            <ul>
              <li>
                <NavLink to="/">Акции</NavLink>
              </li>
              <li>
                <NavLink to="/pizza">Пицца</NavLink>
              </li>
              <li>
                <NavLink to="/sushi">Суши</NavLink>
              </li>
              <li>
                <NavLink to="/drink">Напитки</NavLink>
              </li>
              <li>
                <NavLink to="/salad">Закуски</NavLink>
              </li>
              <li>
                <NavLink to="/kombo">Комбо</NavLink>
              </li>
              <li>
                <NavLink to="/dessert">Десерты</NavLink>
              </li>
              <li>
                <NavLink to="/sauce">Соусы</NavLink>
              </li>
              <li>
                <a href="#">Другое</a>
              </li>
            </ul>
          </div>
          {/* end of left */}
          <button className="sub__navbar__list-right">
            <MdLocalGroceryStore size={"2rem"} />
            <span>999 ₽</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubNavbar;
