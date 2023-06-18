import BaseButton from "./components/BaseButton";
import DropDown from "./components/drop-down/DropDown";
import FoodType from "./components/FoodType";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import SubNavbar from "./components/navbar/SubNavbar";
import PizzaCard from "./components/PizzaCard";
import ProductCard from "./components/ProductCard";
import SearchCompoent from "./components/SearchComponent";
import foods from "./static/food-type";
import product from "./static/product-data";
import prodduct from "./static/product-data";
import img from "./images/pizza_card1.png";
import ReadMore from "./components/ReadMore";
function App() {
  const warm = () => {
    alert("It is working");
  };
  return (
    <section style={{ backgroundColor: "#F9F9F9" }}>
      <Navbar />
      <SubNavbar />
      <BaseButton context="Выбрать" handleClick={warm} />
      <BaseButton context="Хит" handleClick={warm} size="small__size " />
      {foods.map((item) => (
        <FoodType img_url={item.img_url} title={item.title} key={item.id} />
      ))}
      <ProductCard
        product_img={product[0].img_url}
        title={product[0].title}
        product_desc={product[0].product_desc}
        product_condition={product[0].product_condition}
        product_price={product[0].product_price}
      />
      <Footer />
      {/* <SearchCompoent /> */}
      {/* <DropDown /> */}
      <PizzaCard
        img={img}
        title="3 средние пиццы от 999 рублей"
        bgColor="#FF7010"
      />
      <ReadMore
        title="Доставка пиццы в Москве"
        description="Доставка пиццы в Москве
           Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все не то, и до магазина идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам на помощь спешит супергерой – Domino’s Pizza! Как у всякого супергероя, у Domino’s Pizza есть свои суперсилы: восхитительный вкус продукции из отборных ингредиентов; широкий ассортимент, включающий легендарные, фирменные и классические виды, для вегетарианцев и любителей экспериментировать; быстрая и бесплатная доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо не успевало остыть.
Как сделать заказ
Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать или звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом в Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам необходимо: выбрать понравившийся вариант и количество порций; положить желаемое в «Корзину»; не уходить далеко, так как вкусная пицца на заказ с доставкой уже мчится к Вам из ближайшей пиццерии Domino’s. И не забудьте оплатить заказ курьеру!
Показать полностью"
      />
    </section>
  );
}

export default App;
