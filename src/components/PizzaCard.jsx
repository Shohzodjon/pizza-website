import "../styles/pizza_card.css";
const PizzaCard = ({ img, title, bgColor }) => {
  return (
    <div className="pizza__card" style={bgColor ? { background: bgColor } : ""}>
      <div className="pizza__card-img">
        <img src={img} alt="pizza card img" />
      </div>
      <div className="pizza__card-info">
        <p>{title}</p>
      </div>
    </div>
  );
};
export default PizzaCard;
