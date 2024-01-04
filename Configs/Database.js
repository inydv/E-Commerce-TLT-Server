// IMPORT REQUIRED PACKAGES
const Mongoose = require("mongoose");

// IMPORT LOCAL REQUIRED FILES
const { SUCCESSFUL } = require("../Constants/Messages.Constant");

// REPLACE PASSWORD IN MONGO URL
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

// CONNECT TO DATABASE
const connectDatabase = () => {
  Mongoose.set("strictQuery", false);
  Mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((data) => {
      console.log(SUCCESSFUL.MONGODB.replace("${CONNECTION_HOST}", data.connection.host));
    })
    .catch((err) => console.log(err));
};

// EXPORT
module.exports = connectDatabase;
