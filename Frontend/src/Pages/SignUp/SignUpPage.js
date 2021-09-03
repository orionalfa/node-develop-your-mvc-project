
import React, { useState } from "react";
import "./styles.css";
import $ from "jquery";
//import Input from "../../components/Input";
import Cart from "../../components/Cart";

function SignUpPage() {
  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })
function handleChange(e){
  setData({
    ...data,
    [e.target.name] : e.target.value
  })
  
}
function dataSend(e){
  e.preventDefault();
  $.ajax({
    url: "http://localhost:4000/users/",
    type: "POST",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify({
      name:data.name,
      email:data.email,
      pass:data.password
    }),
      success: (res) => {
        console.log(res);
        
      },
    });
    console.log(`${data} Was created`)
  
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
          <form  onSubmit={dataSend}>
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <input
                    name="name"
                    type="text"
                    label="Full Name:"
                    // id="name"
                   defaultValue=""
                    placeholder="Introduce your full name"
                    onChange={handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="email"
                    type="text"
                    label="Email:"
                    // id="email"
                    defaultValue=""
                    onChange={handleChange}
                    placeholder="Ex: useremail@gmail.com"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="password"
                    type="text"
                    label="Password:"
                    // id="password"
                    defaultValue=""
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
