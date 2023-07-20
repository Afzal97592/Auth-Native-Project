import { app } from "./app.js";
import { config } from "dotenv";
import { connectDataBase } from "./config/databse.js";

config({
  path: "./config/config.env",
});
connectDataBase();

app.listen(process.env.PORT, () => {
  console.log("Server Listing on PORT", process.env.PORT);
});
