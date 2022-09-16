import {ConfigurationInterface} from './ConfigurationInterface';

/**
 * Returns the defined environment variables.
 *
 * @throws {Error} If the environment variable `AWS_RDS_DATABASE_NAME` is not defined.
 * @throws {Error} If the environment variable `AWS_RDS_USERNAME` is not defined.
 * @throws {Error} If the environment variable `AWS_RDS_PASSWORD` is not defined.
 * @throws {Error} If the environment variable `AWS_RDS_HOST` is not defined.
 * @throws {Error} If the environment variable `AWS_RDS_DRIVER` is not defined.
 *
 * @todo Update the name of the variables used for the configuration of the database and avoid prefixing them with AWS.
 */
export const getConfiguration = (): ConfigurationInterface => {
  const awsRDSDatabaseName = process.env.AWS_RDS_DATABASE_NAME;
  const awsRDSUsername = process.env.AWS_RDS_USERNAME;
  const awsRDSPassword = process.env.AWS_RDS_PASSWORD;
  const awsRDSHost = process.env.AWS_RDS_HOST;
  const awsRDSDialect = process.env.AWS_RDS_DIALECT;
  const awsRDSPort = process.env.AWS_RDS_PORT;

  if (undefined === awsRDSDatabaseName) {
    throw new Error('`AWS_RDS_DATABASE_NAME` environment variable is required.');
  }

  if (undefined === awsRDSUsername) {
    throw new Error('`AWS_RDS_USERNAME` environment variable is required.');
  }

  if (undefined === awsRDSPassword) {
    throw new Error('`AWS_RDS_PASSWORD` environment variable is required.');
  }

  if (undefined === awsRDSHost) {
    throw new Error('`AWS_RDS_HOST` environment variable is required.');
  }

  if (undefined === awsRDSDialect) {
    throw new Error('`AWS_RDS_DIALECT` environment variable is required.');
  }

  if ( undefined === awsRDSPort) {
    throw new Error('`AWS_RDS_PORT` environment variable is required.')
  }
  return {
    databaseName: awsRDSDatabaseName,
    databaseUser: awsRDSUsername,
    databasePassword: awsRDSPassword,
    databaseHost: awsRDSHost,
    databasePort: awsRDSPort,
    databaseDialect: awsRDSDialect,
  };
};

export default getConfiguration;
