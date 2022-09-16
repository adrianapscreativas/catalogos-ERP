import TimePurchaseModel from "database/models/TimePurchase";
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
const deleteTimePurchaseController = async (id: any) => {
  const searchId = await getItemByPK(TimePurchaseModel, id);
console.log(searchId , "shael");
  if (searchId) {
    return await destroyItem(TimePurchaseModel, id);
  }
  return searchId;
};
export default deleteTimePurchaseController;
