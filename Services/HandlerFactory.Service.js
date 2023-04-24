// CREATE
const Create = (Model, ReqBody) => {
  return Model.create(ReqBody);
};

// UPDATE
const Update = async (Model, req) => {};

// DELETE
const Delete = async (Model, req) => {};

// GET ALL
const GetAll = async (Model, req) => {};

// GET BY ID
const GetById = async (Model, req) => {};

// EXPORT
module.exports = {
  Create,
  Update,
  Delete,
  GetAll,
  GetById,
};
