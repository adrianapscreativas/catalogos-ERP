import BrandModel from "database/models/BrandModel";

/**
 * Controller for retrieve all model data from DB.
 * 
 * @returns <Promise{object}>
 */
const getBrandByPkController= async(id:any)=>{
return await  BrandModel.findByPk(id);
 

}
 export default getBrandByPkController;