/**
 * Keep this file in sync with the code in the "Usage without strict types for
 * attributes" section in /docs/manual/other-topics/typescript.md
 *
 * Don't include this comment in the md file.
 */

import { BrandInterface } from "@functions/interfaces/BrandsInterface/BrandsInterfaces";
import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

import sequelizeClient from "../sequelizeClient";

class BrandModel
  extends Model<
    InferAttributes<BrandModel>,
    InferCreationAttributes<BrandModel>
  >
  implements BrandInterface
{
  declare id: CreationOptional<number>;
  declare name: string;
  declare status: boolean;

  static associate(models) {
    // define association here
    BrandModel.hasMany(models.Models, { foreignKey: "id_brand" });
  }
}
BrandModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    paranoid: true,
    timestamps: true,
    tableName: "Brands",
    sequelize: sequelizeClient(),
  }
);

export default BrandModel;
