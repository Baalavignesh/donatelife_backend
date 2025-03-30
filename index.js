// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const user = require("./src/constant/sampleUsers");
const axios = require("axios");

const authRouter = require("./src/routes/authRouter");
const { connectToDatabase } = require("./src/services/mongodb");
const bankRouter = require("./src/routes/bankRouter");
const userRouter = require("./src/routes/userRouter");
const User = require("./src/models/User");
const awsRouter = require("./src/routes/awsRouter");
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

connectToDatabase();

app.get("/", (req, res) => {
  res.send("Hello World");
  //   user.forEach(async (user) => {
  //     console.log(user);
  //     const userModel = new User(user);
  //     await userModel.save();
  //   });
});

app.post("/api/sms/send", (req, res) => {
  console.log(req.body);

  axios.post('https://textbelt.com/text', {
    phone: req.body.phone,  
    message: req.body.message,
    key: process.env.Textbelt,
    sender: 'baalavignesh21@gmail.co',
  }).then(response => {
    console.log(response.data);
    })

  // request.post(
  //   "https://textbelt.com/text",
  //   {
  //     form: {
  //       phone: req.body.phone,
  //       message: req.body.message,
  //       key: process.env.Textbelt,
  //     },
  // }, (err, httpResponse, body) => {
  //   console.log(JSON.parse(body));
  //   res.status(200).json({
  //     success: true,
  //     message: "SMS sent successfully",
  //   });
  // });
});

app.use("/api/auth", authRouter);
app.use("/api/bank", bankRouter);
app.use("/api/user", userRouter);
app.use("/api/aws", awsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
