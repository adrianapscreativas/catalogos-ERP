import { BrandInterface } from "@functions/interfaces/BrandsInterface/BrandsInterfaces";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import { statusCode } from "@libs/status-code";
import updateBrandController from "@functions/controllers/brand/updateBrandController";
/**
 * Its a demos for create item.
 *
 * @params {function} events
 *
 * @returns {string}
 */

const updateBrand: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async (
  event
) => {
  const { id } = event.pathParameters;

  const { name,status } = event.body as BrandInterface;


  const data = {
    name,
    status,
  };

  const retrieveData = await updateBrandController(data,id);

  if(retrieveData[0] === 0) {
    return formatJSONResponse(statusCode.STATUS_CODE_400, {
      success: false,
      message: "please try again dont update",
    });
  }
  if( retrieveData === null ) {
    return formatJSONResponse(statusCode.STATUS_CODE_NO_FOUND,{
      success: false,
      message: "please enter an acceptable ID again",
    });
  }
  return formatJSONResponse(statusCode.STATUS_CODE_OK, {
    success: true,
    message: "Brand update",
    data: retrieveData,
  });
};

export const main = middyfy(updateBrand);
