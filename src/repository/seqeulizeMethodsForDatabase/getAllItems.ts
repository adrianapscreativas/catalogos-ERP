/**
 * Function Retrieve data from database.
 *
 * @param {Model} model
 *
 * @returns <Promise{object}>
 */

const getAllItems = async (model: any,params: any,limit: number,pages: number) => {
  const getDB = await model.findAndCountAll({
    where: params,
    limit,
    offset: pages * limit,
  });

  return getDB;
};

export default getAllItems;
