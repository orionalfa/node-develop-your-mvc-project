
import React, { useState, useContext } from "react";
import "./styles.css";
import $ from "jquery";
//import Input from "../../components/Input";
import Cart from "../../components/Cart";
import { musicContext } from "../../context";

function SignUpPage() {

  const { handleChangeNewUser, dataSend } = useContext(musicContext);
  
  return (
    <main>
      <Cart />
      <section className="containerOmega">
        <div className="headerPage mt-3">
          <h2>Create User Account</h2>
        </div>
        <hr />
        <div className="mb-3">
          <form  onSubmit={dataSend}>
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <input
                    name="name"
                    type="text"
                    label="Full Name:"
                    defaultValue=""
                    placeholder="Introduce your full name"
                    onChange={handleChangeNewUser}
                    
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="email"
                    type="text"
                    label="Email:"
                    defaultValue=""
                    onChange={handleChangeNewUser}
                    placeholder="Ex: useremail@gmail.com"

                  />
                </div>
                <div className="mb-3">
                  <input
                    name="password"
                    type="text"
                    label="Password:"
                    defaultValue=""
                    onChange={handleChangeNewUser}
                    placeholder="******"

                  />
                </div>
                {/* <div className="mb-3">
                  <Input
                    type="text"
                    label="Country:"
                    id="country"
                    // value={formik.values.address}
                    placeholder="Ex: US"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign up
                </button>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <Input
                    type="text"
                    label="City:"
                    id="city"
                    // value={formik.values.address}
                    placeholder="Ex: New York"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    type="text"
                    label="Postal Code:"
                    id="postalCode"
                    // value={formik.values.address}
                    placeholder="Ex: 00501"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    type="text"
                    label="Contact name:"
                    id="contactName"
                    // value={formik.values.address}
                    placeholder="Name of the package receiver"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    type="text"
                    label="Contact Phone:"
                    id="contactPhone"
                    // value={formik.values.address}
                    placeholder="phone number of the package receiver"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  /> 
                </div>*/}
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
                  Sign up
                </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SignUpPage;
