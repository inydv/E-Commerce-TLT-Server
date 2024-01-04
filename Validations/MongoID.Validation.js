// IS MONGOID VALIDATION
const MongoID = (ID) => {
  if (ID.match(/^[0-9a-fA-F]{24}$/)) {
    return true;
  }
  return false;
};

// EXPORT
module.exports = { MongoID };
