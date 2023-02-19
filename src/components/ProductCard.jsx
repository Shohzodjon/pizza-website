import BaseButton from "./BaseButton";
import "../styles/product-card.css";
const ProductCard = ({
  product_img,
  title,
  product_desc,
  product_price,
  product_condition,
}) => {
  const warm = () => {
    alert("It is working");
  };
  return (
    <div className="product__card">
      <button
        className={
          product_condition ? "product__condition" : "unactive__product"
        }
      >
        {product_condition}
      </button>
      <div className="product__img">
        <img src={product_img} alt="product img" />
      </div>
      <div className="product__info">
        <h4>{title}</h4>
        <p className={product_desc ? "" : "unactive__product"}>
          {product_desc}
        </p>
        <div className="product__price-wrapp">
          <BaseButton context="Выбрать" handleClick={warm} />
          <span>{product_price}</span>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
