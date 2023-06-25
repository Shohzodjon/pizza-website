import "../styles/food-type.css";
import { Link } from "react-router-dom";
const FoodType = ({ img_url, title, path }) => {
  return (
    <Link to={path} className="food__type">
      <img src={img_url} alt="card img" />
      <p>{title}</p>
    </Link>
  );
};
export default FoodType;
