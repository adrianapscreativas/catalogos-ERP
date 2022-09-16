import TimePurchaseModel from "database/models/TimePurchase";
import getAllItems from "src/repository/seqeulizeMethodsForDatabase/getAllItems";

/**
 * Controller for retrieve all model data from DB.
 * 
 * @param limit
 * @param pages
 * @param model 
 * 
 * @returns <Promise{object}>
 */
const getTimePurchaseControlle= async(limit:number,pages:number, params:any)=>{

return await getAllItems(TimePurchaseModel,params,limit,pages);
}

export default getTimePurchaseControlle;