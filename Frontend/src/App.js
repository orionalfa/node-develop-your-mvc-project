import logo from "./logo.svg";
import "./App.css";

import { Button } from "@material-ui/core";
import ProductItem  from "./compenents/productItem";

function App() {
  return (
    <div className="App">
      <header></header>

      <body>
        <Button variant="contained" color="primary">
          Testting
        </Button>

        <ProductItem
        
          productTitle="Violin"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"
          price="300E"
          unitsInStock="units in stoK"
               
        ></ProductItem>

      </body>
    </div>
  );
}

export default App;
