import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Grid } from "@material-ui/core/";
import Input from "../../components/Input";
//import $ from "jquery";
import "./styles.css";
import musicContext from "../../context";

// async function updateProduct(product) {
//   console.log(product._id);
//   console.log(product.title);
// }

export default function ProductForm() {
  const product = {
    title: "Eliminate",
    description: "Producto a eliminar",
    models: [
      {
        name: "Modelo 1 a elminar",
        price: 2000,
        modelDescription: "lalalala",
        unitsStock: 10,
        images: ["imageUrl"],
      },
      // {
      //   name: "Modelo 2 a elminar",
      //   price: 2000,
      //   modelDescription: "lalalala",
      //   unitsStock: 10,
      //   images: ["imageUrl"],
      // },
    ],
  };

  const [productTitle, setProductTitle] = useState(product.title);
  const [productDescription, setProductDescription] = useState(product.description);
  const { removeModel, updateProduct } = useContext(musicContext);

  // const modelsList = product.models.map((product, index) => (

  // ));

  return (
    <main>
      <section className="container">
        <div className="headerPage mt-3">
          <h2>Create User Account</h2>
        </div>
        <hr />
        <div className="mb-3">
          <form>
            <div className="mb-3">
              <Input
                type="text"
                label="Title:"
                id="title"
                defaultValue={product.title}
                // value={formik.values.address}
                placeholder="Introduce new title"
                // handleChange={formik.handleChange}
                // handleBlur={formik.handleBlur}
                // hasErrorMessage={formik.touched.address}
                // errorMessage={formik.errors.address}
              />
            </div>
            <div className="mb-3">
              <Input
                type="text"
                label="Description:"
                id="description"
                defaultValue={product.description}
                // value={formik.values.address}
                placeholder="Introduce new description"
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
                <div className="mb-3">
                  <Input
                    type="text"
                    label="Name:"
                    id="name"
                    defaultValue={model.name}
                    // value={formik.values.address}
                    placeholder="Introduce new name"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    type="text"
                    label="Price:"
                    id="price"
                    defaultValue={model.price}
                    // value={formik.values.address}
                    placeholder="Introduce new price"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    type="text"
                    label="Description:"
                    id="description"
                    defaultValue={model.modelDescription}
                    // value={formik.values.address}
                    placeholder="Introduce new description"
                    // handleChange={formik.handleChange}
                    // handleBlur={formik.handleBlur}
                    // hasErrorMessage={formik.touched.address}
                    // errorMessage={formik.errors.address}
                  />
                </div>
                <div className="mb-3">
                  <Input
                    type="text"
                    label="Stock Units:"
                    id="unitStock"
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
                    <div className="mb-3">
                      <Input
                        type="text"
                        label="Image:"
                        id="image"
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
