import PlaceOfPurchase from "database/models/PlaceOfPurchaes";
import getItemByPK from "src/repository/seqeulizeMethodsForDatabase/getItemByPK";
import updateItem from "src/repository/seqeulizeMethodsForDatabase/updateItem";

/**
 * Controller for processing logic.
 *
 * @param {object} data
 *
 * @returns <Promise{object}>
 */
const updatePlaceController = async (data: object, id) => {
  const searchId = await getItemByPK(PlaceOfPurchase, id);

  if (searchId) {
    const getData = await updateItem(PlaceOfPurchase, data, id);
  
    return getData  }
  return searchId;
};
export default updatePlaceController;
