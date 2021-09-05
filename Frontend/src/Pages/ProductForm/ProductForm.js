import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import $ from "jquery";
import "./styles.css";
import musicContext from "../../context";

export default function ProductForm() {
  // get productId through URL params using useParams hook
  const { id } = useParams();
  const { products } = useContext(musicContext);

  // Find specific product
  var product = products.find((product) => product._id === id);

  // product to update hook
  const [productToUpdate, setProductToUpdate] = useState(product);

  // handling all input changes
  function handleChange(e) {
    setProductToUpdate({
      ...productToUpdate,
      [e.target.name]: e.target.value,
    });
  }

  // Update request by id 
  async function updateProduct() {
    $.ajax({
      url: `http://localhost:4000/products/${productToUpdate._id}`,
      type: "PATCH",
      data: {
        productToUpdate,
      },
      success: (res) => {
        console.log(res);
      },
    });
  }

  return (
    <main>
      <section className="">
        <div className="headerPage mt-3">
          <h2>Create User Account</h2>
        </div>
        <hr />
        <div className="mb-3">
          <form onSubmit={updateProduct}>
            <div className="mb-3 form">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Introduce new title"
                defaultValue={productToUpdate.title}
                onChange={handleChange}
                // value={formik.values.address}
                // handleChange={formik.handleChange}
                // handleBlur={formik.handleBlur}
                // hasErrorMessage={formik.touched.address}
                // errorMessage={formik.errors.address}
              />
            </div>
            <div className="mb-3 form">
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Introduce new description"
                defaultValue={productToUpdate.description}
                onChange={handleChange}
                // value={formik.values.address}
                // handleChange={formik.handleChange}
                // handleBlur={formik.handleBlur}
                // hasErrorMessage={formik.touched.address}
                // errorMessage={formik.errors.address}
              />
            </div>
            {productToUpdate.models.map((model, index) => (
              <div>
                <div className="headerPage mt-3">
                  <h5>Model {index + 1}</h5>
                </div>
                <div className="mb-3 form">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id={`name${index}`}
                    name={`name${index}`}
                    placeholder="Introduce new name"
                    defaultValue={model.name}
                    onChange={handleChange}
                    // value={formik.values.address}
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  />
                </div>
                <div className="mb-3 form">
                  <label htmlFor="price">Price:</label>
                  <input
                    type="text"
                    id={`price${index}`}
                    name={`price${index}`}
                    placeholder="Introduce new price"
                    defaultValue={model.price}
                    onChange={handleChange}
                    // value={formik.values.address}
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  />
                </div>
                <div className="mb-3 form">
                  <label htmlFor="modelDescription">Description:</label>
                  <input
                    type="text"
                    id={`modelDescription${index}`}
                    name={`modelDescription${index}`}
                    placeholder="Introduce new description"
                    defaultValue={model.modelDescription}
                    onChange={handleChange}
                    // value={formik.values.address}
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  />
                </div>
                <div className="mb-3 form">
                  <label htmlFor="unitStock">Stock Units:</label>
                  <input
                    type="text"
                    id="unitStock"
                    name="unitStock"
                    placeholder="Update stock units"
                    defaultValue={model.unitsStock}
                    onChange={handleChange}
                    // value={formik.values.address}
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  />
                </div>
                {model.images.map((image) => (
                  <div>
                    <div className="mb-3 form">
                      <label htmlFor="name">Image:</label>
                      <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="Update image"
                        defaultValue={image}
                        onChange={handleChange}
                        // value={formik.values.address}
                        // handleChange={formik.handleChange}
                        // handleBlur={formik.handleBlur}
                        // hasErrorMessage={formik.touched.address}
                        // errorMessage={formik.errors.address}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <button type="submit" className="btn btn-primary">
              Confirm
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
