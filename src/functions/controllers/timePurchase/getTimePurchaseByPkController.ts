import TimePurchaseModel from "database/models/TimePurchase";
import getItemByPK from "src/repository/seqeulizeMethodsForDatabase/getItemByPK";


/**
 * Controller for retrieve all model data from DB.
 *
 * @param limit
 * @param pages
 * @param model
 *
 * @returns <Promise{object}>
 */
const getTimePurchaseByPkController = async (id: any) => {
  return await getItemByPK(TimePurchaseModel, id);
};
export default getTimePurchaseByPkController;
