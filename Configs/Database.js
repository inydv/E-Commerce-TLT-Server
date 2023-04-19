const mongoose = require("mongoose");

const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);

const connectDatabase = () => {
    mongoose.set("strictQuery", false);
    mongoose
        .connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((data) => {
            console.log(`MONGODB CONNECTED WITH SERVER: ${data.connection.host}`);
        })
        .catch((err) => console.log(err));
};

module.exports = connectDatabase;
