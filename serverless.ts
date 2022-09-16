import type { AWS } from '@serverless/typescript';

// import hello from '@functions/hello';
import * as Functions from '@functions/index';

const serverlessConfiguration: AWS = {
  service: 'Clients-ERP',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild','serverless-offline'],
  provider: {
    name: 'aws',  
    profile: 'default',
    runtime: 'nodejs16.x',
    stage: 'dev',
    region: 'us-east-2',
    layers:  ['arn:aws:lambda:us-east-2:675296751371:layer:CommonModelsDb:4'],
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    tags:{
      Enterprise: 'Client-ERP-App',
      Project: 'Client-ERP-App',
      Cost_Center: 'Client-ERP-App',
      Billing: 'Client-ERP-App',
    },
    environment:  {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      AWS_RDS_DATABASE_NAME: '${self:custom.databaseName.${self:provider.stage}}',
      AWS_RDS_USERNAME: '${self:custom.databaseUser.${self:provider.stage}}',
      AWS_RDS_PASSWORD: '${self:custom.databasePassword.${self:provider.stage}}',
      AWS_RDS_HOST: '${self:custom.databaseHost.${self:provider.stage}}',
      AWS_RDS_PORT: '${self:custom.databasePort.${self:provider.stage}}',
      AWS_RDS_DIALECT: '${self:custom.databaseDialect.${self:provider.stage}}',

    },
    iam:{
      role:{
        statements:[
          {
            "Sid": "Stmt1449904348000",
            "Effect": "Allow",
            "Action": [
                "cloudformation:CreateStack",
                "cloudformation:CreateChangeSet",
                "cloudformation:ListStacks",
                "cloudformation:UpdateStack",
                "cloudformation:DescribeChangeSet",
                "cloudformation:ExecuteChangeSet"
            ],
            "Resource": [
                "*"
            ]
        }
        ]
      }
    }
  },
  // import the function via paths
  functions: {...Functions},
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    api_prefix: '/api/v1',
    stages:['dev','prod'],
     databaseUser: {
      dev: '',
      prod:''
     },
     databasePassword: {
      dev: '',
      prod: '',
     },
     databaseName: {
      dev: '',
      prod:''
     },
     databasePort: {
      dev: '3306',
      prod: ''
     },
     databaseHost:{
      dev:'',
      prod:''
     },
     databaseDialect:{
      dev:'mysql',
      prod:''
     },
     tags_global: {
        Enterprise: 'Client-ERP-App',
        Project: 'Client-ERP-App',
        Cost_Center: 'Client-ERP-App',
        Billing: 'Client-ERP-App',
     }

  },
};

module.exports = serverlessConfiguration;
