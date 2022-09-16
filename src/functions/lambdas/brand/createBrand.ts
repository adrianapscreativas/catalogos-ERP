import createBrandController from "@functions/controllers/brand/createBrandController";
import { BrandInterface } from "@functions/interfaces/BrandsInterface/BrandsInterfaces";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import { statusCode } from "@libs/status-code";
/**
 * Its a demos for create item.
 *
 * @params {function} events
 *
 * @returns {string}
 */

const create: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async (event) => {

  const { name,status } = event.body as BrandInterface;

  const data = {
    name,
    status
  };

  const rerieveData = await createBrandController(data);

  return formatJSONResponse(statusCode.STATUS_CODE_CREATED,{
    success: true,
    message: "Brand created",
    data: rerieveData,
  });
};

export const main = middyfy(create);
