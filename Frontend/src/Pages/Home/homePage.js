import "./homeStyles.css";
import logo from "../../img/logotype.png";

import Cart from "../../components/Cart";

function Home({ showShoppingCart }) {
  return (
    <main className="first_image">
      <Cart showShoppingCart={showShoppingCart} />
      <img className="logotype" src={logo}></img>
    </main>
  );
}
export default Home;
