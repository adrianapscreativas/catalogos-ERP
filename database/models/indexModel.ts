import BrandModel from "./BrandModel";
import Models from "./Models";

BrandModel.hasMany(Models, {
  foreignKey: "id_brand",
  as: "models",
});

Models.belongsTo(BrandModel, {
  targetKey: "id",
  foreignKey: "id_brand",
  as: "brands",
});

export { BrandModel, Models };
