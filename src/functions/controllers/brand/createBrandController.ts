import BrandModel from "../../../../database/models/BrandModel";

/**
 * Controller for processing logic.
 *
 * @param {object} data
 *
 * @returns <Promise{object}>
 */
const createBrandController = async (data: object) => {

  return await BrandModel.create(data);
};
export default createBrandController;
