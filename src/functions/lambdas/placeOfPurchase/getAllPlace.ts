import getPlaceController from "@functions/controllers/placeOfPurchase/getPlaceController";
import placeFilter from "@functions/filter/placeFilter";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import {statusCode} from '../../../libs/status-code'

/**
 * Retrieve and filter data from db.
 *
 * @returns {string}
 */
const get: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async (event) => {


const { pages, limit,params} = placeFilter(event.queryStringParameters);
const retrieveData = await  getPlaceController(limit, pages, params);

if( retrieveData.count === 0 && retrieveData.rows.length === 0 ) {
  return formatJSONResponse(statusCode.STATUS_CODE_OK,{
    success: false,
    message: "data not found",
  });
}

return formatJSONResponse(statusCode.STATUS_CODE_OK,{
  success: true,
    message: "data created",
    total_pages: Math.ceil(retrieveData.count / limit),
    per_page: limit,
    page: pages + 1,
    data: retrieveData
  });
};

export const main = middyfy(get);
