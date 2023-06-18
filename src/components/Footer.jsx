import PizzaPeace from "./PizzaPeace";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../styles/footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__flex">
          <PizzaPeace />
          <ul className="first__list">
            <li>
              <h4>Куда пицца</h4>
            </li>
            <li>
              <a href="#">О компании</a>
            </li>
            <li>
              <a href="#">Пользовательское соглашение</a>
            </li>
            <li>
              <a href="#">Условия гарантии</a>
            </li>
          </ul>
          {/* footer second list */}
          <ul className="second__list">
            <li>
              <h4>Помощь</h4>
            </li>
            <li>
              <a href="#">Ресторан</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
            <li>
              <a href="#">Поддержка</a>
            </li>
          </ul>
          {/* footer last list */}
          <ul className="third__list">
            <li>
              <h4>Контакты</h4>
            </li>
            <li>
              <a href="tel:+7 (926) 223-10-11" className="footer__link-flex">
                <BsTelephone size={"1.8rem"} color={"#FF7010"} /> +7 (926)
                223-10-11
              </a>
            </li>
            <li>
              <a href="#" className="footer__link-flex">
                <HiOutlineLocationMarker size={"1.8rem"} color={"#FF7010"} />{" "}
                Москва, ул. Юных Ленинцев, д.99
              </a>
            </li>
            <li
              style={{ display: "flex", alignItems: "center", gap: "2.4rem" }}
            >
              <a href="#" className="footer__link-flex">
                <FaFacebook size={"1.8rem"} color={"#FF7010"} />
                Facebok
              </a>
              <a href="#" className="footer__link-flex">
                <FaInstagram size={"1.8rem"} color={"#FF7010"} />
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <span>© Copyright 2021 — Куда Пицца</span>
          <span>Отследить заказ</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
