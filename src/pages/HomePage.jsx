import "../styles/home-page.css";
import FoodType from "../components/FoodType";
import foods from "../static/food-type";
import PizzaCard from "../components/PizzaCard";
import SearchComponent from "../components/SearchComponent";
import img1 from "../images/pizza_card1.png";
import HeaderComp from "../components/HeaderComp";
import ProductCard from "../components/ProductCard";
import product from "../static/product-data";
const HomePage = () => {
  let arr = [1, 2, 3, 4];
  let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className="home__page">
      <div className="container">
        <div className="food__type__box">
          {foods.map((item) => (
            <FoodType img_url={item.img_url} title={item.title} key={item.id} />
          ))}
        </div>
        <div className="pizza__card__container">
          {arr.map((item) => (
            <PizzaCard
              img={img1}
              title="3 средние пиццы от 999 рублей"
              bgColor="#FF7010"
              key={item}
            />
          ))}
        </div>
        <div>
          <SearchComponent />
        </div>
        <div>
          <HeaderComp />
        </div>
        <div className="home__page__grid">
          {arr2.map((item) => (
            <ProductCard
              key={item}
              product_img={product[0].img_url}
              title={product[0].title}
              product_desc={product[0].product_desc}
              product_condition={product[0].product_condition}
              product_price={product[0].product_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default HomePage;
