import PlaceOfPurchase from "database/models/PlaceOfPurchaes";
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
const getPlaceByPkController = async (id: any) => {
  return await getItemByPK(PlaceOfPurchase, id);
};
export default getPlaceByPkController;
