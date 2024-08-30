const path = require("node:path");

const express = require("express");
// Read .env file and attach attributes to process.env
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const rootDir = require("./utils/path");
const route = require("./routes");
const globalErrorHandler = require("./middlewares/globalErrorHandler");

const app = express();

app.set("views", path.join(rootDir, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(rootDir, "public")));

route(app);

app.use(globalErrorHandler);

//const server = http.createServer(app);
//server.listen(3000);
app.listen(process.env.APP_PORT);
