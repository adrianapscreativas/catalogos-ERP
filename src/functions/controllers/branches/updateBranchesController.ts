import BranchesModel from "database/models/Branches";


/**
 * Controller for processing logic.
 *
 * @param {object} data
 *
 * @returns <Promise{object}>
 */
const updateBranchesController = async (model: BranchesModel, id:number): Promise<BranchesModel> => {
    const searchId = await BranchesModel.findByPk(id)

    if (searchId) {
          return  await BranchesModel.update{model,{
            where: {
              id,
            },
          }}
    }
    return searchId
};
export default updateBranchesController;
