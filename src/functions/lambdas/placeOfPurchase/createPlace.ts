import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import { statusCode } from "@libs/status-code";
import { PlaceOfPurchase } from "@functions/interfaces/PlaceOfPurchase/PlaceOfPurchase";
import createPlaceController from "@functions/controllers/placeOfPurchase/createPlaceController";
/**
 * Its a demos for create item.
 *
 * @params {function} events
 *
 * @returns {string}
 */

const create: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async (event) => {

  const { name } = event.body as PlaceOfPurchase ;

  const data = {
    name,
    status: true
  };

  const rerieveData = await  createPlaceController(data);

  return formatJSONResponse(statusCode.STATUS_CODE_CREATED,{
    success: true,
    message: "Brand created",
    data: rerieveData,
  });
};

export const main = middyfy(create);
