import React from "react";

import "./styles.css";

import Input from "../../components/Input";
import Cart from "../../components/Cart";

function SignUpPage(showShoppingCart) {
  return (
    <main>
      <Cart showShoppingCart={showShoppingCart} />
      <section className="container">
        <div className="headerPage">
          <h2>Create User Account</h2>
        </div>
        <hr />
        <div class="mb-3">
          <form>
            <div class="mb-3">
              <Input
                type="text"
                label="Email:"
                id="email"
                // value={formik.values.address}
                placeholder="useremail@gmail.com"
                // handleChange={formik.handleChange}
                // handleBlur={formik.handleBlur}
                // hasErrorMessage={formik.touched.address}
                // errorMessage={formik.errors.address}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <Input
                type="text"
                label="Password:"
                id="password"
                // value={formik.values.address}
                placeholder="******"
                // handleChange={formik.handleChange}
                // handleBlur={formik.handleBlur}
                // hasErrorMessage={formik.touched.address}
                // errorMessage={formik.errors.address}
              />
              <div id="passwordHelp" class="form-text">
                Passwords must include...
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SignUpPage;
