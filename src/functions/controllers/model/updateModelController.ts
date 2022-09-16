import Models from "database/models/Models";
import getItemByPK from "src/repository/seqeulizeMethodsForDatabase/getItemByPK";
import updateItem from "src/repository/seqeulizeMethodsForDatabase/updateItem";

/**
 * Controller for processing logic.
 *
 * @param {object} data
 *
 * @returns <Promise{object}>
 */
const updateModelController = async (data: object, id) => {
    const searchId = await getItemByPK(Models, id);

    if (searchId) {
        return await updateItem(Models, data, id);
    }
    return searchId
};
export default updateModelController;
