/**
 * Keep this file in sync with the code in the "Usage without strict types for
 * attributes" section in /docs/manual/other-topics/typescript.md
 *
 * Don't include this comment in the md file.
 */
 import { Model, DataTypes } from "sequelize";

 import sequelizeClient from "../sequelizeClient";
 
 class TimePurchaseModel extends Model {
   declare id: string;
   declare option: string;
 }
 
 TimePurchaseModel.init(
   {
     id: {
       type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey: true,
     },
     option: {
       type: new DataTypes.STRING(128),
       allowNull: false,
     },
     status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
   },
   {
     paranoid: true,
     timestamps: true,
     tableName: "TimePurchase",
     sequelize: sequelizeClient(),
   }
 );
 
 export default TimePurchaseModel;
 