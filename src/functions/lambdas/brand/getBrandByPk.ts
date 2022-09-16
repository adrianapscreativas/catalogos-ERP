import getBrandByPkController from "@functions/controllers/brand/getBrandByPkController";
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


const {id} = event.pathParameters;
const retrieveData = await getBrandByPkController(id);

if( retrieveData === null ) {
  return formatJSONResponse(statusCode.STATUS_CODE_NO_FOUND,{
    success: false,
    message: "please enter an acceptable ID again",
  });
}

return formatJSONResponse(statusCode.STATUS_CODE_OK,{
    success: true,
    message: "data found",
    data: retrieveData
  });
};

export const main = middyfy(get);
