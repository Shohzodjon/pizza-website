import { IoMdClose } from "react-icons/io";
import "../../styles/filter-modal.css";
const FilterBox = () => {
  return (
    <div className="filter__modal__box">
      <div className="filter__header">
        <h3 className="filter__head__title">Фильтры</h3>
        <button className="modal__close__btn">
          <IoMdClose size="2.7rem" color="rgba(165, 165, 165, 1)" />
        </button>
      </div>
      <div className="filter__body">
        <div>
          <p className="filter__title">Общее</p>
          <ul>
            <li>
              <button className="filter__btn">Хит</button>
            </li>
            <li>
              <button className="filter__btn">Новинка</button>
            </li>
            <li>
              <button className="filter__btn">С мясом</button>
            </li>
          </ul>
          <ul>
            <li>
              <button className="filter__btn">Вегетарианская</button>
            </li>
            <li>
              <button className="filter__btn">С курицей</button>
            </li>
            <li>
              <button className="filter__btn">Без лука</button>
            </li>
          </ul>
          <ul>
            <li>
              <button className="filter__btn">С грибами</button>
            </li>
            <li>
              <button className="filter__btn">С морепродуктами</button>
            </li>
            <li>
              <button className="filter__btn">Барбекью</button>
            </li>
          </ul>
        </div>
        {/* end of first */}
        <div>
          <p className="filter__title">Сыр</p>
          <ul>
            <li>
              <button className="filter__btn">Реджанито</button>
            </li>
            <li>
              <button className="filter__btn">Моцарелла</button>
            </li>
            <li>
              <button className="filter__btn">Чеддер</button>
            </li>
          </ul>
          <ul>
            <li>
              <button className="filter__btn">С голубой плесенью</button>
            </li>
            <li>
              <button className="filter__btn">Смесь итальянских сыров</button>
            </li>
          </ul>
          <ul>
            <li>
              <button className="filter__btn">Мягкий молодой сыр</button>
            </li>
          </ul>
        </div>
        {/* end of second */}
        <div>
          <p className="filter__title">Мясо</p>
          <ul>
            <li>
              <button className="filter__btn">Пепперони</button>
            </li>
            <li>
              <button className="filter__btn">Свинина</button>
            </li>
            <li>
              <button className="filter__btn">Ветчина</button>
            </li>
            <li>
              <button className="filter__btn">Бекон</button>
            </li>
          </ul>
          <ul>
            <li>
              <button className="filter__btn">Говядина</button>
            </li>
            <li>
              <button className="filter__btn">Чоризо</button>
            </li>
            <li>
              <button className="filter__btn">Колбаски</button>
            </li>
            <li>
              <button className="filter__btn">Куриная грудка</button>
            </li>
          </ul>
        </div>
      </div>
      <span className="filter__line"></span>
      <div className="filter__footer">
        <button className="filter__footer__btn">Сбросить</button>
        <button className="filter__footer__btn">Применить</button>
      </div>
    </div>
  );
};
export default FilterBox;
