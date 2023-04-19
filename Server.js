// IMPORT REQUIRED PACKAGES
const { Cloudinary, FileUpload } = require("./Configs/Packages.Import");

// IMPORT LOCAL REQUIRED FILES
const App = require("./App");
const ConnectDatabase = require("./Configs/Database");

// HANDLING UNCAUGHT EXCEPTION
process.on("uncaughtException", (err) => {
  console.log(`Error Name: ${err.name}`);
  console.log(`Error Message: ${err.message}`);
  console.log("UCAUGHT EXCEPTION!💥 SHUTTING down....");

  process.exit(1);
});

// DOTENV CONFIG
require("dotenv").config({ path: "./Configs/config.env" });

// CLOUDINARY CONFIGS
Cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// EXPRESS FILEUPLOAD
App.use(FileUpload());

// CONNECTING TO DATABASE
ConnectDatabase();

// SERVER LISTEN
const Port = process.env.PORT || 4000;
const Server = App.listen(Port, () => {
  console.log(`SERVER IS WORKING ON ${Port}....`);
});

// UNHANDLED PROMISE REJECTION OF DATABASE
process.on("unhandledRejection", (err) => {
  console.log(`Error Name: ${err.name}`);
  console.log(`Error Message: ${err.message}`);
  console.log("UNHANDLED REJECTION!💥 SHUTTING down....");

  Server.close(() => {
    process.exit(1);
  });
});
