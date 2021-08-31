
import "./App.css";

import ProductItem  from "./compenents/productItem";


import ProductPage from "./Pages/Products";

function App() {
  return (
    <div className="App">
      <header></header>

      <body>
     

        <ProductItem
        
          productTitle="Violin"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"
          price="300E"
          unitsInStock="units in stoK"
               
        ></ProductItem>

      </body>
      <main>
        <ProductPage />
      </main>
    </div>
  );
}

export default App;
