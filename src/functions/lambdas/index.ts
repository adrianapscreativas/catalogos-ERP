import { handlerPath } from '@libs/handler-resolver';

export const demo= {
    handler: `${handlerPath(__dirname)}/demo.main`,
    description: 'lambda for retrieve brands with filter',
    tags: {
        Enterprise: 'Client-ERP-App',
        Project: 'Client-ERP-App',
        Cost_Center: 'Client-ERP-App',
        Billing: 'Client-ERP-App',
      },
    events: [
      {
        http: {
          method: 'get',
          path:  '${self:custom.api_prefix}/demo',
          cors: true
        },
      },
    ],
  };

  export const demoDelete= {
    handler: `${handlerPath(__dirname)}/restore.main`,
    description: 'lambda for retrieve brands with filter',
    tags: {
        Enterprise: 'Client-ERP-App',
        Project: 'Client-ERP-App',
        Cost_Center: 'Client-ERP-App',
        Billing: 'Client-ERP-App',
      },
    events: [
      {
        http: {
          method: 'post',
          path:  '${self:custom.api_prefix}/restore/{id}',
          cors: true
        },
      },
    ],
  };