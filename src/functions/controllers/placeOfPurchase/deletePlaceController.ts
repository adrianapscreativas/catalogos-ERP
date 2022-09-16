import PlaceOfPurchase from "database/models/PlaceOfPurchaes";
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
const deletePlaceController = async (id: any) => {
  const searchId = await getItemByPK(PlaceOfPurchase, id);

  if (searchId) {
    return await destroyItem(PlaceOfPurchase, id);
  }
  return searchId;
};
export default deletePlaceController;
