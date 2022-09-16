import { Op } from "sequelize";

/**
 * Retrieve query parameter from event for filter data in Model DB.
 *
 * @param queryStringParameters
 *
 * @returns  {object}
 */

const brandFilter = (queryStringParameters) => {
  const PAGE_NUMBER_DEFAULT = 0;
  const LIMIT_NUMBER_DEFAULT = 10;
  let pages: number = PAGE_NUMBER_DEFAULT;
  let limit: number = LIMIT_NUMBER_DEFAULT;
  let params: object = {};

  if (undefined === queryStringParameters || null === queryStringParameters) {
    return { pages, limit, params };
  }

  let { per_page, page, name, status } = queryStringParameters;

  console.log(typeof per_page);
  if (undefined !== page) {
    pages = parseInt(page, 10);
  }

  if (undefined !== per_page) {
    limit = parseInt(per_page, 10);
    console.log(typeof limit);
  }

  if (undefined !== name && null !== name) {
    params = {
      name: {
        [Op.like]: `%${name}%`,
      },
    };
  }
  if (undefined !== status && null !== status) {
    params = {
      ...params,
      status,
    };
  }
  return { limit, pages, params };
};

export default brandFilter;
