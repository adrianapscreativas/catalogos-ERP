/**
 * Function for Sequelize creates a new value in a table.
 *
 * @param {Model} model
 * @param {object} data
 *
 * @returns <Promise{object}>
 */
  
 const createItem = async (model:any, data:object) => {
 return await model.create(data);
  
  };
  
  export default createItem;
  