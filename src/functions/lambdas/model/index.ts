/**
 * Index where lambda event,paths and custom.
 */

 import { handlerPath } from '@libs/handler-resolver';

 export const createModel= {
   handler: `${handlerPath(__dirname)}/createModel.main`,
   description: 'lambda for create Model',
   tags: {
    Enterprise: 'skeleton-App',
    Project: 'skeleton-App',
    Cost_Center: 'sekeleton-App',
    Billing: 'skeleton-App',
  },
   events: [
     {
       http: {
         method: 'post',
         path:  '${self:custom.api_prefix}/models',
         cors: true
       },
     },
   ],
 };
 

 export const getAllModel= {
    handler: `${handlerPath(__dirname)}/getAllModel.main`,
    description: 'lambda for retrieve Model with filter',
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
          path:  '${self:custom.api_prefix}/models',
          cors: true
        },
      },
    ],
  };
  
  export const getModelByPK= {
    handler: `${handlerPath(__dirname)}/getModelByPk.main`,
    description: 'lambda for retrieve data by Primay Key',
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
          path:  '${self:custom.api_prefix}/models/{id}',
          cors: true
        },
      },
    ],
  };
  

  export const deleteModelByPK= {
    handler: `${handlerPath(__dirname)}/deleteModel.main`,
    description: 'lambda for delete data by Primay Key',
    tags: {
        Enterprise: 'Client-ERP-App',
        Project: 'Client-ERP-App',
        Cost_Center: 'Client-ERP-App',
        Billing: 'Client-ERP-App',
      },
    events: [
      {
        http: {
          method: 'delete',
          path:  '${self:custom.api_prefix}/models/{id}',
          cors: true

        },
      },
    ],
  };
  
  export const updateModelByPK= {
    handler: `${handlerPath(__dirname)}/updateModel.main`,
    description: 'lambda update data by Primay Key',
    tags: {
        Enterprise: 'Client-ERP-App',
        Project: 'Client-ERP-App',
        Cost_Center: 'Client-ERP-App',
        Billing: 'Client-ERP-App',
      },
    events: [
      {
        http: {
          method: 'put',
          path:  '${self:custom.api_prefix}/models/{id}',
          cors: true

        },
      },
    ],
  };
  