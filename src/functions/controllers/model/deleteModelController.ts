import Models from "database/models/Models";
import getItemByPK from "src/repository/seqeulizeMethodsForDatabase/getItemByPK";
import destroyItem from "../../../repository/seqeulizeMethodsForDatabase/destroyItem";
/**
 * Controller for retrieve all model data from DB.
 *
 * @param limit
 * @param pages
 * @param model
 *
 * @returns <Promise{object}>
 */
const deleteModelController = async (id: any) => {
  const searchId = await getItemByPK(Models, id);

  if (searchId) {
    return await destroyItem(Models, id);
  }
  return searchId;
};
export default deleteModelController;
