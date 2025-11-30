import mongoose from "mongoose";

// for creating a model we will use schema here

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unqiue: true,
    },
    password: {
      type: String,
      require: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true } //createdAt & updatedAt to user
);

// last login and there date

const User = mongoose.model("User", userSchema);

export default User;
