import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import models from "./src/models";

//routes
import userRouter from "./src/routes/user.routes";
import storeRouter from "./src/routes/store.routes";
import productRouter from "./src/routes/product.routes";
import orderRouter from "./src/routes/order.routes";
import notificationRouter from "./src/routes/notification.routes";
import storeCategoryRouter from "./src/routes/store-category.routes";
import authRouter from "./src/routes/auth.routes";

models()
  .then(() => {
    console.log("Database is connected!");
  })
  .catch((error) => console.log(error));

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("⚡️[server]: system-development-uce rest-api is up!");
});

app.use(express.json());

//user routes
app.use("/api/users", userRouter);
app.use("/api/stores", storeRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/notifications", notificationRouter);
app.use("/api/store-categories", storeCategoryRouter);
app.use("/api/auth", authRouter);

//To get images
app.get("/uploads/:source/:img", (req: Request, res: Response) => {
  res.sendFile(
    `${__dirname}/src/uploads/${req.params.source}/${req.params.img}`
  );
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
