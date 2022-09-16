import {Models,BrandModel} from "database/models/indexModel";
import getPopulate from "src/repository/seqeulizeMethodsForDatabase/getPopulate";

/**
 * Controller for retrieve all model data from DB.
 * 
 * @param limit
 * @param pages
 * @param model 
 * 
 * @returns <Promise{object}>
 */
const getModelController= async(limit:number,pages:number, params:object)=>{
    const populate = [
      {
        model: BrandModel,
        as: "brands",
        attributes: ['id','name']
      },
      ];
 const data = await getPopulate(Models,params,populate,limit,pages);
 return data;
}
 export default getModelController;