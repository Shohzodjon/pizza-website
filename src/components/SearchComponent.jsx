import "../styles/search-component.css";
import BaseButton from "./BaseButton";
import { HiOutlineLocationMarker } from "react-icons/hi";
const SearchCompoent = () => {
  return (
    <section className="search__component">
      <div className="container">
        <div className="search__flex">
          <p>Проверить адрес доставки</p>
          <label htmlFor="search__input">
            <HiOutlineLocationMarker
              className="location__icon"
              size={"2rem"}
              color={"#FF7010"}
            />
            <input
              type="text"
              id="search__input"
              placeholder="Адрес"
              autoComplete="off"
            />
          </label>
          <BaseButton context="Проверить" />
        </div>
      </div>
    </section>
  );
};

export default SearchCompoent;
