import { Model } from "sequelize/types";

/**
 * Functions to logically remove from the database
 */
const destroyItem = async <T extends Model>(model: T): Promise<void> => {
  await model.destroy();
};

export default destroyItem;
