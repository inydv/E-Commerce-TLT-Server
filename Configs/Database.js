// IMPORT REQUIRED PACKAGES
const { Mongoose } = require("./Packages.Import");

// REPLACE PASSWORD IN MONGO URL
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// CONNECT TO DATABASE
const connectDatabase = () => {
  Mongoose.set("strictQuery", false);
  Mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((data) => {
      console.log(`MONGODB CONNECTED WITH SERVER: ${data.connection.host}`);
    })
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
