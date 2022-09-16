import BrandModel from "../../../../database/models/BrandModel";

/**
 * Controller for processing logic.
 *
 * @param {object} data
 *
 * @returns <Promise{object}>
 */
const updateBrandController = async (data: object, id: number) => {
  const searchId = await BrandModel.findByPk(id);

  if (searchId) {
    const getData = await BrandModel.update(data,{id});
    return getData;
  }
  return searchId;
};
export default updateBrandController;
