import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "../../styles/drop-comp.css";
const DropDown = () => {
  const [lists, setLists] = useState([
    { list: "Акции", id: 1 },
    { list: "О компании", id: 2 },
    { list: "Пользовательское соглашение", id: 3 },
    { list: "Условия гарантии", id: 4 },
    { list: "Ресторан", id: 5 },
  ]);
  const [select, setSelected] = useState("");
  const handleClick = (id) => {
    lists.filter((item) => {
      if (item.id == id) {
        setSelected(item.list);
      }
    });
  };
  return (
    <div className="drop__component container">
      <div className="drop__input">
        <p>{select}</p>
        <MdKeyboardArrowDown />
      </div>
      <ul className="drop__list">
        {lists.map((item) => (
          <li onClick={() => handleClick(item.id)} key={item.id}>
            {item.list}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DropDown;
