// IMPORT REQUIRED PACKAGES
const Cloudinary = require("cloudinary");
const Express = require("express");
const FileUpload = require("express-fileupload");
const Path = require("path");

// IMPORT LOCAL REQUIRED FILES
const App = require("./App");
const ConnectDatabase = require("./Configs/Database");
const { SUCCESSFUL, ERROR } = require("./Constants/Messages.Constant");

// DOTENV CONFIG
require("dotenv").config({ path: "./Configs/config.env" });

// HANDLING UNCAUGHT EXCEPTION
if (process.env.NODE_ENV === "PRODUCTION") {
  process.on("uncaughtException", (err) => {
    console.log(`Error Name: ${err.name}`);
    console.log(`Error Message: ${err.message}`);
    console.log(ERROR.UNCAUGHT_EXCEPTION);

    process.exit(1);
  });
}

// CLOUDINARY CONFIGS
Cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// EXPRESS FILEUPLOAD
App.use(FileUpload());

// USE BUILD INDEX.JS
App.use(Express.static(Path.join(__dirname, "dist")));
App.get("*", (req, res) => {
  res.sendFile('index.html', { root: Path.join(__dirname, 'dist') });
})

// CONNECTING TO DATABASE
ConnectDatabase();

// SERVER LISTEN
const Port = process.env.PORT || 4000;
const Server = App.listen(Port, () => {
  console.log(SUCCESSFUL.SERVER.replace("${PORT}", Port));
});

// UNHANDLED PROMISE REJECTION OF DATABASE
if (process.env.NODE_ENV === "PRODUCTION") {
  process.on("unhandledRejection", (err) => {
    console.log(`Error Name: ${err.name}`);
    console.log(`Error Message: ${err.message}`);
    console.log(ERROR.UNHANDLED_REJECTION);

    Server.close(() => {
      process.exit(1);
    });
  });
}
