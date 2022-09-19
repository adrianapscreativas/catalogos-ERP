/**
 * Keep this file in sync with the code in the "Usage without strict types for
 * attributes" section in /docs/manual/other-topics/typescript.md
 *
 * Don't include this comment in the md file.
 */

import { BrandInterface } from "@functions/interfaces/BrandsInterface/BrandsInterfaces";
import { IsDefined, IsOptional, Length, MinLength } from "class-validator";
import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";


import sequelizeClient from "../sequelizeClient";

class BranchesModel extends Model<
  InferAttributes<BranchesModel>,
  InferCreationAttributes<BranchesModel>
> implements BrandInterface{

  declare id: CreationOptional<number>;
  
  declare street: string;

  declare num_ext: string;

  
  declare status: boolean;

  declare num_int: string;

  declare locality: string;

  declare city: string;

  declare state: string;

  declare cp: string;

}
BranchesModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    street: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    num_ext: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    num_int: {
      type: DataTypes.TEXT,
    },
    locality: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cp: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    paranoid: true,
    timestamps: true,
    tableName: "Branches",
    sequelize: sequelizeClient(),
  }
);

export default BranchesModel;
