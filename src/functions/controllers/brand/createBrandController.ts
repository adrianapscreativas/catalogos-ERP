import BrandModel from "../../../../database/models/BrandModel";
import { validate, ValidationError } from 'class-validator';
import BranchSchema from "@functions/schemas/BranchSchema";


/**
 * Controller for processing logic.
 *
 * @param {object} data
 *
 * @returns <Promise{object}>
 */
const createBrandController = async (model: BranchSchema) => {
  const validationBranch:ValidationError[] = await validate(model);
  if(validationBranch.length > 0 ){
    return validationBranch;
  }

  return await BrandModel.create(model);
};
export default createBrandController;
