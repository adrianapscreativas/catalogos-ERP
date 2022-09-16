import deleteModelController from "@functions/controllers/model/deleteModelController";
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
const deleteBrand: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async (event) => {


const {id} = event.pathParameters;

const retrieveData = await  deleteModelController(id);

if( retrieveData === null ) {
  return formatJSONResponse(statusCode.STATUS_CODE_NO_FOUND,{
    success: false,
    message: "please enter an acceptable ID again",
  });
}

return formatJSONResponse(statusCode.STATUS_CODE_OK,{
    success: true,
    message: "data delete",
  });
};

export const main = middyfy(deleteBrand);
