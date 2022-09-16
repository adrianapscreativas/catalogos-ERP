import createItem from "src/repository/seqeulizeMethodsForDatabase/createItem";
import PlaceOfPurchase from "../../../../database/models/PlaceOfPurchaes";

/**
 * Controller for processing.
 *
 * @param {object} data
 *
 * @returns <Promise{object}>
 */
const createPlaceController = async (data: object) => {
  return await createItem(PlaceOfPurchase, data);
};

export default createPlaceController;
