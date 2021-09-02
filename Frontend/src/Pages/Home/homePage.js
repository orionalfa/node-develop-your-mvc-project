import "./homeStyles.css";

import Cart from "../../components/Cart";

function Home({ showShoppingCart }) {
  return (
    <main className="first_image">
      <Cart showShoppingCart={showShoppingCart} />
      <img className="logotype" src="./img/logotype.png" alt="logotype"></img>
    </main>
  );
}
export default Home;
