import createItem from "src/repository/seqeulizeMethodsForDatabase/createItem";
import Models from "../../../../database/models/Models"

/**
 * Controller for processing logic.
 *
 * @param {object} data
 *
 * @returns <Promise{object}>
 */
const createModelController = async (data) => {

  return await createItem(Models, data);
};
export default createModelController;
