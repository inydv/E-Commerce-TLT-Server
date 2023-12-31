// CREATE
const Create = (Model, ReqBody) => {
  return Model.create(ReqBody);
};

// UPDATE
const Update = async (Model, Id, ReqBody) => {
  return Model.findByIdAndUpdate(
    Id,
    { $set: ReqBody },
    {
      new: true,
      runValidators: true,
    }
  );
};

// GET ALL
const GetAll = async (Model, filter = {}) => {
  return Model.find(filter);
};

// GET BY ID
const GetById = async (Model, Id, IsAuth = false) => {
  if (IsAuth) {
    return Model.findById(Id).select("+password +isVerified");
  }
  return Model.findById(Id);
};

// FIND ONE
const Get = async (Model, ReqBody, IsAuth = false) => {
  if (IsAuth) {
    return Model.findOne(ReqBody).select("+password +isVerified");
  }
  return Model.findOne(ReqBody);
};

// COUNT DOCUMENT
const CountDocument = async (Model, filter = {}) => {
  return Model.countDocuments(filter);
};

// GET USING PAGINATION
const GetUsingPagination = async (Model, filter = {}, query) => {
  // DESTRUCTURING THE FILTER
  const { page, resultPerPage } = query;

  // CURRENT PAGE
  const currentPage = Number(page) || 1;

  // HOW MANY PRODUCT SHOULD BE SKIPPED
  const skip = resultPerPage * (currentPage - 1);

  return Model.find(filter).limit(resultPerPage).skip(skip);
}

// EXPORT
module.exports = { Create, Update, GetAll, GetById, Get, CountDocument, GetUsingPagination };
