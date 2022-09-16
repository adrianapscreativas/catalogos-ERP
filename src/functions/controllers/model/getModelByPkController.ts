import Models from "database/models/Models";
import getItemByPK from "src/repository/seqeulizeMethodsForDatabase/getItemByPK";

/**
 * Controller for retrieve all model data from DB.
 * 
 * @param limit
 * @param pages
 * @param model 
 * 
 * @returns <Promise{object}>
 */
const getModelByPkController= async(id:any)=>{
return await  getItemByPK (Models,id);
 

}
 export default getModelByPkController;