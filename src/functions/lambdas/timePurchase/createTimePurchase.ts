import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import { statusCode } from "@libs/status-code";
import createTimePurchaseController from "@functions/controllers/timePurchase/createTimePurchaseController";
import { TimePurchase } from "@functions/interfaces/TimePurchase/TimePurchase";

/**
 * Its a demos for create item.
 *
 * @params {function} events
 *
 * @returns {string}
 */

const create: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async (event) => {

  const { option ,status} = event.body as TimePurchase  ;

  const data = {
    option,
    status
  };

  const rerieveData = await  createTimePurchaseController(data);

  return formatJSONResponse(statusCode.STATUS_CODE_CREATED,{
    success: true,
    message: "Brand created",
    data: rerieveData,
  });
};

export const main = middyfy(create);
