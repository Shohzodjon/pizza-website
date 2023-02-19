import { IoPizzaOutline } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import "../../styles/sub-navbar.css";
import PizzaPeace from "../PizzaPeace";
const SubNavbar = () => {
  return (
    <section className="sub__navbar">
      <div className="container">
        <div className="sub__navbar-list">
          <div className="sub__navbar__list-left">
            <PizzaPeace />
            <ul>
              <li>
                <a href="#">Акции</a>
              </li>
              <li>
                <a href="#">Пицца</a>
              </li>
              <li>
                <a href="#">Суши</a>
              </li>
              <li>
                <a href="#">Напитки</a>
              </li>
              <li>
                <a href="#">Закуски</a>
              </li>
              <li>
                <a href="#">Комбо</a>
              </li>
              <li>
                <a href="#">Десерты</a>
              </li>
              <li>
                <a href="#">Соусы</a>
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
