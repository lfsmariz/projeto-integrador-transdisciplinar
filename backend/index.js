import express from "express";
import { userRoutes } from "./routes/userRoutes.js";
import { productRoutes } from "./routes/productRoutes.js";
import { cartRoutes } from "./routes/cartRoutes.js";
import { orderRoutes } from "./routes/orderRoutes.js";
import { connectToDatabase } from "./repository/conn.js";

connectToDatabase();

const app = express();
app.use(express.json());

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
