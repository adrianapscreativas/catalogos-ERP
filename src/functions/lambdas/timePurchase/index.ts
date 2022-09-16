/**
 * Index where lambda event,paths and custom.
 */

 import { handlerPath } from '@libs/handler-resolver';

 export const createTimePurchase= {
   handler: `${handlerPath(__dirname)}/createTimePurchase.main`,
   description: 'lambda for create place',
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
         path:  '${self:custom.api_prefix}/time-purchase',
         cors: true
       },
     },
   ],
 };
 

 export const getAllTimePurchase= {
    handler: `${handlerPath(__dirname)}/getAllTimePurchase.main`,
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
          path:  '${self:custom.api_prefix}/time-purchase',
          cors: true
        },
      },
    ],
  };
  
  export const getTimePurchaseByPK= {
    handler: `${handlerPath(__dirname)}/getTimePurchaseByPk.main`,
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
          path:  '${self:custom.api_prefix}/time-purchase/{id}',
          cors: true
        },
      },
    ],
  };
  

  export const deleteTimePurchaseByPK= {
    handler: `${handlerPath(__dirname)}/deleteTimePurchase.main`,
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
          path:  '${self:custom.api_prefix}/time-purchase/{id}',
          cors: true
        },
      },
    ],
  };
  
  export const updateTimePurchaseByPK= {
    handler: `${handlerPath(__dirname)}/updateTimePurchase.main`,
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
          path:  '${self:custom.api_prefix}/time-purchase/{id}',
          cors: true
        },
      },
    ],
  };
  