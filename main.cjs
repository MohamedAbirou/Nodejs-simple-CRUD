const express = require("express");
const productRoute = require("./routes/product.route.cjs");
const { connectDB } = require("./db/connect.cjs");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello there! LESSGOOOO");
});

// routes
app.use("/api/products", productRoute);

const startServer = () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(3000, () =>
      console.log("Server has started on port http://localhost:3000")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
