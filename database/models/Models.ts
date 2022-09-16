/**
 * Keep this file in sync with the code in the "Usage without strict types for
 * attributes" section in /docs/manual/other-topics/typescript.md
 *
 * Don't include this comment in the md file.
 */
 import { Model, DataTypes, ForeignKey } from "sequelize";

 import sequelizeClient from "../sequelizeClient";
import BrandModel from "./BrandModel";
 
 class Models extends Model {
   declare id: number;
   declare name: string;
   declare id_brand: ForeignKey<BrandModel['id']>;;

   static associate(models) {
    // define association here
    Models.belongsTo(models.BrandModel, {foreignKey: 'id_brand'})
  }
 }
 
 Models.init(
   {
     name: {
       type: new DataTypes.STRING(128),
       allowNull: false,
     },
     id_brand : {
      type:DataTypes.INTEGER,
      allowNull:false
     },
     status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
   },
   {
     paranoid: true,
     timestamps: true,
     tableName: "Models",
     sequelize: sequelizeClient(),
   },
 );
 

 export default Models;
 