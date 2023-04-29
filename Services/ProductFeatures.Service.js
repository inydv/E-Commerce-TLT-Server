// API FEATURE CLASS
class ApiFeatures {
  // CONSTRUCTOR
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  // FILTER
  filter() {
    // DESTRUCTURING THE QUERY STRING
    const { name, category, subCategories, price, ratings } = this.queryStr;

    // VARIABLES
    let priceString, ratingString;

    // PRICE REPLACEMENT
    if (price) {
      priceString = JSON.stringify(price).replace(
        /\b(gt|gte|lt|lte)\b/g,
        (key) => `$${key}`
      );
    }

    // RATING REPLACEMENT
    if (ratings) {
      ratingString = JSON.stringify(price).replace(
        /\b(gt|gte|lt|lte)\b/g,
        (key) => `$${key}`
      );
    }

    // QUERIES
    const searchFilter = {
      // MULTIPLE, CASE INSENSITIVE, REGULAR EXPRESSION
      ...(name && {
        name: {
          $in: name.split(",").map((item) => {
            return new RegExp(item, "i");
          }),
        },
      }),
      // MULTIPLE, EXACT MATCH, CASE INSENSITIVE
      ...(category && {
        category: {
          $in: category.split(",").map((item) => {
            return new RegExp("^" + item + "$", "i");
          }),
        },
      }),
      // SINGLE, EXACT MATCH, CASE INSENSITIVE
      ...(subCategories && {
        subCategories: new RegExp("^" + subCategories + "$", "i"),
      }),
      // PRICE
      ...(price && {
        price: JSON.parse(priceString),
      }),
      // RATING
      ...(ratings && {
        ratings: JSON.parse(ratingString),
      }),
    };

    // MAKE QUERY
    this.query = this.query.find(searchFilter);

    // RETURN QUERY
    return this;
  }

  // PAGINATION
  pagination(resultPerPage) {
    // DESTRUCTURING THE QUERY STRING
    const { page } = this.queryStr;

    // CURRENT PAGE
    const currentPage = Number(page) || 1;

    // HOW MANY PRODUCT SHOULD BE SKIPPED
    const skip = resultPerPage * (currentPage - 1);

    // MAKE THE QUERY
    this.query = this.query.limit(resultPerPage).skip(skip);

    // RETURN QUERY
    return this;
  }

  // SORTING
  sorting() {
    // DESTRUCTURING THE QUERY STRING
    const { sort } = this.queryStr;

    // CHECK SORTING IS ACCORDING TO NEW OR OLD
    if (sort === "newest") {
      // MAKE THE QUERY
      this.query = this.query.sort({ createdAt: -1 });
    } else if (sort === "oldest") {
      // MAKE THE QUERY
      this.query = this.query.sort({ createdAt: 1 });
    }

    // RETURN QUERY
    return this;
  }
}

// EXPORT
module.exports = ApiFeatures;
