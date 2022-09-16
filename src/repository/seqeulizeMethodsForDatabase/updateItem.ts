/**
 * Function for Sequelize update value in table.
 *
 * @param {Model} model
 * @param {object} data
 * @param {number} id
 *
 * @returns <Promise{object}>
 */

const updateItem = async (model: any, data: any, id: number) => {
  return await model.update(data, {
    where: {
      id,
    },
  });
};

export default updateItem;
