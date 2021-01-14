require("dotenv").config();
require("../config/dbConnection");
const User = require("../models/User");
const mongoose = require("mongoose");

const users = [
  {
    username: "Toumsy",
    email: "belaetouma@gmail.com",
    password: "1234",
    country: "France",
  },
  {
    username: "Esthy",
    email: "esthy@gmail.com",
    password: "1234",
    country: "Kenya",
  },

  {
    username: "Imani",
    email: "imani@gmail.com",
    password: "1234",
    country: "Tanzania",
  },
];

//empty database
User.deleteMany()
  .then(async () => {
    //insert users in db
    await User.insertMany(users);
    console.log("ok: nb a users has been inserted");
  })
  .catch((err) => {
    console.log(err);
  });
