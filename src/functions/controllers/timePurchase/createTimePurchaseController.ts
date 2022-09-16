import createItem from "src/repository/seqeulizeMethodsForDatabase/createItem";
import TimePurchaseModel from '../../../../database/models/TimePurchase';

/**
 * Controller for processing.
 *
 * @param {object} data
 *
 * @returns <Promise{object}>
 */
const createTimePurchaseController= async (data: object) => {
  return await createItem(TimePurchaseModel, data);
};

export default createTimePurchaseController;
