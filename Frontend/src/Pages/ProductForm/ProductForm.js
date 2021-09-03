import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
//import $ from "jquery";
import "./styles.css";
import musicContext from "../../context";

// async function updateProduct(product) {
//   console.log(product._id);
//   console.log(product.title);
// }

export default function ProductForm() {

  // get productId through URL params using useParams hook
  const { id } = useParams();
  const { products, removeModel, updateProduct } = useContext(musicContext);

  const product = products.find((product) => product._id === id);

  const [updatedProductStatic, setUpdatedProductStatic] = useState({
    title: product.title,
    description: product.description,
  });

  function handleChangeStatic(e) {
    setUpdatedProductStatic({
      ...updatedProductStatic,
      [e.target.name]: e.target.value,
    });
  }
  const [updatedProductModels, setUpdatedProductModels] = useState(
    product.models,
  );
  // const [productTitle, setProductTitle] = useState(product.title);
  // const [productDescription, setProductDescription] = useState(product.description);

  // const modelsList = product.models.map((product, index) => (

  // ));

  return (
    <main>
      <section className="">
        <div className="headerPage mt-3">
          <h2>Create User Account</h2>
        </div>
        <hr />
        <div className="mb-3">
          <form>
            <div className="mb-3 form">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={product.title}
                // value={formik.values.address}
                placeholder="Introduce new title"
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
                defaultValue={product.description}
                // value={formik.values.address}
                placeholder="Introduce new description"
                onChange={handleChangeStatic}
                // handleChange={formik.handleChange}
                // handleBlur={formik.handleBlur}
                // hasErrorMessage={formik.touched.address}
                // errorMessage={formik.errors.address}
              />
            </div>
            {product.models.map((model, index) => (
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
                    defaultValue={model.name}
                    // value={formik.values.address}
                    placeholder="Introduce new name"
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
                    defaultValue={model.price}
                    // value={formik.values.address}
                    placeholder="Introduce new price"
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
                    defaultValue={model.modelDescription}
                    // value={formik.values.address}
                    placeholder="Introduce new description"
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
                    defaultValue={model.unitsStock}
                    // value={formik.values.address}
                    placeholder="Update stock units"
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
                        defaultValue={image}
                        // value={formik.values.address}
                        placeholder="Update image"
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
