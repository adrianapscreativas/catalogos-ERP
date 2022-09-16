/**
 * Index where lambda event,paths and custom.
 */

 import { handlerPath } from '@libs/handler-resolver';

 export const createPlace= {
   handler: `${handlerPath(__dirname)}/createPlace.main`,
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
         path:  '${self:custom.api_prefix}/places-buy',
         cors: true
       },
     },
   ],
 };
 

 export const getAllPlace= {
    handler: `${handlerPath(__dirname)}/getAllPlace.main`,
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
          path:  '${self:custom.api_prefix}/places-buy',
          cors: true
        },
      },
    ],
  };
  
  export const getPlaceByPK= {
    handler: `${handlerPath(__dirname)}/getPlaceByPK.main`,
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
          path:  '${self:custom.api_prefix}/places-buy/{id}',
          cors: true
        },
      },
    ],
  };
  

  export const deletePlaceByPK= {
    handler: `${handlerPath(__dirname)}/deletePlace.main`,
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
          path:  '${self:custom.api_prefix}/places-buy/{id}',
          cors: true
        },
      },
    ],
  };
  
  export const updatePlaceByPK= {
    handler: `${handlerPath(__dirname)}/updatePlace.main`,
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
          path:  '${self:custom.api_prefix}/places-buy/{id}',
          cors: true
        },
      },
    ],
  };
  