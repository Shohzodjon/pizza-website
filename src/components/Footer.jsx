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
          <ul>
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
          <ul>
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
          <ul>
            <li>
              <h4>Контакты</h4>
            </li>
            <li>
              <a href="tel:+7 (926) 223-10-11">
                <BsTelephone /> +7 (926) 223-10-11
              </a>
            </li>
            <li>
              <a href="#">
                <HiOutlineLocationMarker /> Москва, ул. Юных Ленинцев, д.99
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebook />
                Facebok
              </a>
              <a href="#">
                <FaInstagram />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
