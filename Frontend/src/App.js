import "./App.css";

import NavBar from "./components/NavBar";
import ProductPage from "./Pages/Products";
import SignUpPage from "./Pages/SignUp";
import ChangePasswordPage from "./Pages/ChangePwd";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {/* <HomePage/> */}
          </Route>
          <Route path="/sign-up" exact>
            <SignUpPage />
          </Route>
          <Route path="/user-pwd-change" exact>
            <ChangePasswordPage />
          </Route>
          <Route path="/products" exact>
            <ProductPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
