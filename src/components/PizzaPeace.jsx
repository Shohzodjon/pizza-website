import { IoPizzaOutline } from "react-icons/io5";
import "../styles/pizza-peace.css";
const PizzaPeace = () => {
  return (
    <div className="pizza__box">
      <span className="pizza__wrapp">
        <IoPizzaOutline size={"3rem"} color={"#FF7010"} />
      </span>
      <p className="font-inter">Куда пицца</p>
    </div>
  );
};
export default PizzaPeace;
