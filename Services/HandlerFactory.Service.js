// CREATE
const Create = (Model, ReqBody) => {
  return Model.create(ReqBody);
};

// UPDATE
const Update = async (Model, Id, ReqBody) => {
  return Model.findByIdAndUpdate(Id, { $set: ReqBody }, { new: true });
};

// DELETE
const Delete = async (Model, ReqBody) => {};

// GET ALL
const GetAll = async (Model, ReqBody) => {};

// GET BY ID
const GetById = async (Model, Id) => {
  return Model.findById(Id);
};

// FIND ONE
const Get = async (Model, ReqBody, IsAuth = false) => {
  if (IsAuth) {
    return Model.findOne(ReqBody).select("+password +isVerified");
  }
  return Model.findOne(ReqBody);
};

// EXPORT
module.exports = {
  Create,
  Update,
  Delete,
  GetAll,
  GetById,
  Get,
};
