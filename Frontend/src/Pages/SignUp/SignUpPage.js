
import React, { useState } from "react";
import "./styles.css";

import Input from "../../components/Input";
import Cart from "../../components/Cart";

function SignUpPage() {
  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })
function handleChange(e){
  console.log(e.target.name)
    // setData({
    //   ...data

    // })
}
  return (
    <main>
      <Cart />
      <section className="containerOmega">
        <div className="headerPage mt-3">
          <h2>Create User Account</h2>
        </div>
        <hr />
        <div className="mb-3">
          <form>
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <Input
                    name="name"
                    type="text"
                    label="Full Name:"
                    id="name"
                    // value={formik.values.address}
                    placeholder="Introduce your full name"
                    onChange={handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    name="email"
                    type="text"
                    label="Email:"
                    id="email"
                    // value={formik.values.address}
                    onChange={handleChange}
                    placeholder="Ex: useremail@gmail.com"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    name="password"
                    type="text"
                    label="Password:"
                    id="password"
                    // value={formik.values.address}
                    onChange={handleChange}
                    placeholder="******"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
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
          </form>
        </div>
      </section>
    </main>
  );
}

export default SignUpPage;
