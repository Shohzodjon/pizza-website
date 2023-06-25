import "../styles/header-component.css";
import { TbFilter } from "react-icons/tb";
const HeaderComp = ({ title }) => {
  return (
    <div className="header__component">
      <h2 className="header__component__title">{title}</h2>
      <div className="header__filter__box">
        <TbFilter size={"2rem"} color={"#FF7010"} />
        <p>Фильтры</p>
      </div>
    </div>
  );
};
export default HeaderComp;
