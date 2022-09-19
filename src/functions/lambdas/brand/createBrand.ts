import createBrandController from "@functions/controllers/brand/createBrandController";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import { statusCode } from "@libs/status-code";
import BrandTransformer from "@functions/transformers/BrandTransformer";
/**
 * Its a demos for create item.
 *
 * @params {function} events
 *
 * @returns {string}
 */

const create: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async (event) => {

const brand = BrandTransformer.reverse(event.body as any);

  const rerieveData = await createBrandController(brand);

  if (Array.isArray(rerieveData)) {
    return formatJSONResponse(statusCode.STATUS_CODE_FORM_ERROR, {
      success: false,
      message: "Unsatisfied model",
      data: rerieveData,
    });
  }


  return formatJSONResponse(statusCode.STATUS_CODE_CREATED,{
    success: true,
    message: "Brand created",
    data: rerieveData,
  });
};

export const main = middyfy(create);
