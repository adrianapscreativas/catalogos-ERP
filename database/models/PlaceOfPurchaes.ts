/**
 * Keep this file in sync with the code in the "Usage without strict types for
 * attributes" section in /docs/manual/other-topics/typescript.md
 *
 * Don't include this comment in the md file.
 */
 import { Model, DataTypes } from "sequelize";

 import sequelizeClient from "../sequelizeClient";
 
 class PlaceOfPurchase extends Model {
   declare id: string;
   declare name: string;

  }
 
  PlaceOfPurchase.init(
   {
     id: {
       type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey: true,
     },
     name: {
       type: new DataTypes.STRING,
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
     tableName: "PlaceOfPurchase",
     sequelize: sequelizeClient(),
   }
 );
 
 export default PlaceOfPurchase;
 