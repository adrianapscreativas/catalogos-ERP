// @todo: variables for stage and prod.

module.exports =   {
  "development": {
    "username": process.env.AWS_RDS_USERNAME ,
    "password": process.env.AWS_RDS_PASSWORD ,
    "database": process.env.AWS_RDS_DATABASE_NAME ,
    "host": process.env.AWS_RDS_HOST ,
    "dialect": 'mysql'
  }
}

