// EXPORT CONGIGURATIONS
module.exports = {
  // CORS CONFIGURATION
  CORS: {
    ORIGIN: "http://localhost:5173, https://snappy-era-riak.onrender.com/",
    METHODS: "DELETE,GET,PATCH,POST,PUT",
  },

  // COOKIE
  COOKIE: {
    EXPIRE: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // EXPIRES IN MINISECONDS * SECONDS * MINUTES * HOURS * DAYS
  },
};
