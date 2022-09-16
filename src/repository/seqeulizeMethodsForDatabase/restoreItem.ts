/**
 * Functions to logically remove from the database
 *
 * @param {Model} model
 * @param {object} params
 *
 * @returns  <Promise{object}>
 */
 const restoreItem = async (model: any, id: any) => {
    return await model.restore({
      where: {
        id,
      },
    });
  };
  
  export default restoreItem;
  