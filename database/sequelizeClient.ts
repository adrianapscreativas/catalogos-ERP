import { Sequelize } from "sequelize";
import getConfiguration from "./config/configVariables";

const {
  databaseName,
  databaseUser,
  databasePassword,
  databaseHost,
  databaseDialect,
  databasePort,
} = getConfiguration();

/**
 * Create a new instance for the database connection.
 */
let sequelizeConnection: null | Sequelize = null;

const sequelizeClient = () => {
  if (null === sequelizeConnection) {
    sequelizeConnection = new Sequelize(
      `${databaseDialect}://${databaseUser}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}`
    );
  }
  return sequelizeConnection;
};

export default sequelizeClient;
