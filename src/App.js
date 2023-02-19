import BaseButton from "./components/BaseButton";
import FoodType from "./components/FoodType";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import SubNavbar from "./components/navbar/SubNavbar";
import ProductCard from "./components/ProductCard";
import foods from "./static/food-type";
import product from "./static/product-data";
import prodduct from "./static/product-data";
function App() {
  const warm = () => {
    alert("It is working");
  };
  return (
    <section>
      <Navbar />
      <SubNavbar />
      <BaseButton context="Выбрать" handleClick={warm} />
      <BaseButton context="Хит" handleClick={warm} size="small__size " />
      {/* {foods.map((item) => (
        <FoodType img_url={item.img_url} title={item.title} key={item.id} />
      ))} */}
      {/* <ProductCard
        product_img={product[0].img_url}
        title={product[0].title}
        product_desc={product[0].product_desc}
        product_condition={product[0].product_condition}
        product_price={product[0].product_price}
      /> */}
      <Footer />
    </section>
  );
}

export default App;
