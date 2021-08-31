import React from "react";

import "./styles.css";
import Input from "../../components/Input";

function ChangePasswordPage() {
  return (
    <section className="container">
      <div className="headerPage">
        <h2>Change Password</h2>
      </div>
      <hr />
      <div class="mb-3">
        <form>
          <div class="mb-3">
            <Input
              type="text"
              label="Old Password:"
              id="oldPassword"
              // value={formik.values.address}
              placeholder="******"
              // handleChange={formik.handleChange}
              // handleBlur={formik.handleBlur}
              // hasErrorMessage={formik.touched.address}
              // errorMessage={formik.errors.address}
            />
          </div>
          <div class="mb-3">
            <Input
              type="text"
              label="New Password:"
              id="newPassword"
              // value={formik.values.address}
              placeholder="******"
              // handleChange={formik.handleChange}
              // handleBlur={formik.handleBlur}
              // hasErrorMessage={formik.touched.address}
              // errorMessage={formik.errors.address}
            />
            <div id="emailHelp" class="form-text">
              Passwords must include...
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ChangePasswordPage;
