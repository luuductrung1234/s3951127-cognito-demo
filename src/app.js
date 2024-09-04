const path = require("node:path");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
// Read .env file and attach attributes to process.env
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const rootDir = require("./utils/path");
const route = require("./routes");
const { auth } = require("./middlewares/authMiddleware");
const globalErrorHandler = require("./middlewares/globalErrorHandler");

const app = express();
app.use(cors());

app.set("views", path.join(rootDir, "views"));
app.set("view engine", "ejs");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(express.static(path.join(rootDir, "public")));

app.use(auth);

route(app);

app.use(globalErrorHandler);

//const server = http.createServer(app);
//server.listen(3000);
app.listen(process.env.APP_PORT, () => {
  console.log(`Server running on port ${process.env.APP_PORT}`);
});
