// IMPORT LOCAL REQUIRED FILES
const { CatchAsyncError, ErrorHandler } = require("../Utilities/index");

// CREATE
const Create = (Model) => CatchAsyncError(async (req, res, next) => {});

// UPDATE
const Update = (Model) => CatchAsyncError(async (req, res, next) => {});

// DELETE
const Delete = (Model) => CatchAsyncError(async (req, res, next) => {});

// GET ALL
const GetAll = (Model) => CatchAsyncError(async (req, res, next) => {});

// GET BY ID
const GetById = (Model) => CatchAsyncError(async (req, res, next) => {});

// EXPORT
module.exports = {
  Create,
  Update,
  Delete,
  GetAll,
  GetById,
};
