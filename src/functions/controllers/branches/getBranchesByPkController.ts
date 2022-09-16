import BranchesModel from "database/models/Branches";

/**
 * Controller for retrieve all model data from DB.
 * 
 * @returns <Promise{object}>
 */
const getBranchesByPkController = async (id: any) => {
  return await BranchesModel.findByPk(id);
};
export default getBranchesByPkController;
