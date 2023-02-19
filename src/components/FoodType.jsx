import "../styles/food-type.css";
const FoodType = ({ img_url, title }) => {
  return (
    <div className="food__type">
      <img src={img_url} alt="card img" />
      <p>{title}</p>
    </div>
  );
};
export default FoodType;
