import PlaceOfPurchase from "database/models/PlaceOfPurchaes";
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
const getPlaceController= async(limit:number,pages:number,params:any)=>{

return await getAllItems(PlaceOfPurchase,params,limit,pages);
}

export default getPlaceController;