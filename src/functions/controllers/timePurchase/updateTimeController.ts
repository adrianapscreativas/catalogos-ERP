import TimePurchaseModel from "database/models/TimePurchase";
import getItemByPK from "src/repository/seqeulizeMethodsForDatabase/getItemByPK";
import updateItem from "src/repository/seqeulizeMethodsForDatabase/updateItem";

/**
 * Controller for processing logic.
 *
 * @param {object} data
 *
 * @returns <Promise{object}>
 */
const updateTimeController = async (data: object, id) => {
  const searchId = await getItemByPK(TimePurchaseModel, id);

  if (searchId) {
    const getData = await updateItem(TimePurchaseModel, data, id);
  
    return getData  }
  return searchId;
};
export default updateTimeController;
