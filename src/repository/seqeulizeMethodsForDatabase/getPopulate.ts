/**
 * Function Retrieve data from database.
 *
 * @param {Model} model
 *
 * @returns <Promise{object}>
 */

 const getPopulate = async (model: any, params: object ,populate:object,limit:number, pages:number) => {
    const getDB = await model.findAndCountAll({
      where: params,
      include: populate,
      limit,
      offset: pages * limit,

    });
  
    return getDB;
  };
  
  export default getPopulate;
  