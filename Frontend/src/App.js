import "./App.css";

import ProductPage from "./Pages/Products";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header><NavBar/></header>
      <main>
        <ProductPage />
      </main>
    </div>
  );
}

export default App;
