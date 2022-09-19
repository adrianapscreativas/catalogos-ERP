/**
 * Index where lambda event,paths and custom.
 */

 import { handlerPath } from '@libs/handler-resolver';

 export const createBranch= {
   handler: `${handlerPath(__dirname)}/createBranches.main`,
   description: 'lambda for create brand',
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
         path:  '${self:custom.api_prefix}/branches',
         cors: true
       },
     },
   ],
 };
 

 export const getAllBrands= {
    handler: `${handlerPath(__dirname)}/getAllBrand.main`,
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
          path:  '${self:custom.api_prefix}/brands',
          cors: true
        },
      },
    ],
  };
  
  export const getBrandsByPK= {
    handler: `${handlerPath(__dirname)}/getBrandByPk.main`,
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
          path:  '${self:custom.api_prefix}/brands/{id}',
          cors: true
        },
      },
    ],
  };
  

  export const deleteBrandsByPK= {
    handler: `${handlerPath(__dirname)}/deleteBrand.main`,
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
          path:  '${self:custom.api_prefix}/brands/{id}',
          cors: true
        },
      },
    ],
  };
  
  export const updateBrandsByPK= {
    handler: `${handlerPath(__dirname)}/updateBrand.main`,
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
          path:  '${self:custom.api_prefix}/brands/{id}',
          cors: true
        },
      },
    ],
  };
  