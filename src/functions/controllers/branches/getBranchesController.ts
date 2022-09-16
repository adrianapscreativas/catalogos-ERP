import BranchesModel from "database/models/Branches";
import { WhereOptions } from "sequelize/types";


/**
 * Controller for retrieve all model data from DB.
 */
const getBranchesController = async (params: WhereOptions<Partial<BranchesModel>>,limit:number,pages:number) => {
console.log(params, params);
  return await  BranchesModel.findAndCountAll({
    where: params,

        limit,
        offset: pages * limit,
    }
  );
};
export default getBranchesController;
