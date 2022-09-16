import BranchesModel from '../../../../database/models/Branches'

/**
 * Controller for processing logic.
 */
const createBranchesController = async (model: BranchesModel): Promise<BranchesModel> => {

  return await  BranchesModel.create(model)
};
export default createBranchesController;
