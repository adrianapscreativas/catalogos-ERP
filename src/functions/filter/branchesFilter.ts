import { Op, WhereOptions } from "sequelize";
import BranchesModel from "database/models/Branches";

/**
 * Retrieve query parameter from event for filter data in Model DB.
 *
 * @param queryStringParameters
 *
 * @returns  {object}
 */

const branchesFilter = (queryStringParameters) => {
  const PAGE_NUMBER_DEFAULT = 0;
  const LIMIT_NUMBER_DEFAULT = 10;
  let pages: number = PAGE_NUMBER_DEFAULT;
  let limit: number = LIMIT_NUMBER_DEFAULT;
  let params: WhereOptions<Partial<BranchesModel>> = {};

  if (undefined === queryStringParameters || null === queryStringParameters) {
    return { pages, limit, params };
  }

  let { per_page, page, street, cp, locality, city, status } =
    queryStringParameters;

  console.log(typeof per_page);
  if (undefined !== page) {
    pages = parseInt(page, 10);
  }

  if (undefined !== per_page) {
    limit = parseInt(per_page, 10);
    console.log(typeof limit);
  }

  if (undefined !== street && null !== street) {
    params = {
      street: {
        [Op.like]: `%${street}%`,
      },
    };
  }
  if (undefined !== status && null !== status) {
    params = {
      ...params,
      status,
    };
  }

  if (undefined !== street && null !== street) {
    params = {
      ...params,
      cp: {
        [Op.like]: `%${cp}%`,
      },
    };
  }
  if (undefined !== locality && null !== locality) {
    params = {
      ...params,
      locality: {
        [Op.like]: `%${locality}%`,
      },
    };
  }

  if (undefined !== city && null !== city) {
    params = {
      ...params,
      city: {
        [Op.like]: `%${city}%`,
      },
    };
  }
  return { limit, pages, params };
};

export default branchesFilter;
