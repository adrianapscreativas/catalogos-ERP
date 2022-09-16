import { validate, ValidationError } from 'class-validator';
import BranchesModel from '../../../../database/models/Branches'

/**
 * Controller for processing logic.
 */
const createBranchesController = async (model: BranchesModel): Promise<BranchesModel | ValidationError[]>  => {

  const validationBranch:ValidationError[] = await validate(model);

  if(validationBranch.length > 0 ){
    return validationBranch;
  }

  return await  BranchesModel.create(model)
};
export default createBranchesController;
