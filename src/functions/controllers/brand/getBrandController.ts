import {BrandModel ,Models} from "database/models/indexModel";
import { WhereOptions } from "sequelize/types";

/**
 * Controller for retrieve all model data from DB.
 *
 * @param limit
 * @param pages
 * @param model
 *
 * @returns <Promise{object}>
 */
const getBrandController = async (params: WhereOptions<Partial<Models>>,limit:number,pages:number) => {
  console.log(typeof limit,limit);
  const populate = [
    {
      model: Models,
      as: "models",
      attributes: ["id", "name"],
    },
  ];

 return await BrandModel.findAndCountAll({
    where: params,
    include : populate,
    limit,
    offset: pages * limit,
  })
};
export default getBrandController;
