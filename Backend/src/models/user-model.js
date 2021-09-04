const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { isEmail } = require("validator");


const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "The email is required"],
    unique: true,
    validate: {
      validator: (value) => isEmail(value),
      message: (props) => `The email ${props.value} is not valid`,
    },
  },

  pass: {
    type: String,
    required: [true, "The password is required"],
  },

  shippingAddress: {
    country: { type: String, 
      // required: [true, "The country is required"] 
    },
    city: { type: String,
      //  required: [true, "The city is required"] 
      },
    postalCode: {
      type: String,
      // required: [true, "The postal code is required"],
    },
    streetAddress: {
      type: String,
      // required: [true, "The street address is required"],
    },
    contactName: {
      type: String,
      // required: [true, "The contact name is required"],
    },
    contactPhone: {
      type: String,
      // required: [true, "The contact phone is required"],
    },
  },
  role: { type: String,
    //  required: [true, "The role is required"] 
    },
    products: [{ 
    type: Schema.Types.ObjectId, 
    ref:"products",
  }],
});

const Users = mongoose.model("users", UserSchema);

module.exports = { Users: Users };
