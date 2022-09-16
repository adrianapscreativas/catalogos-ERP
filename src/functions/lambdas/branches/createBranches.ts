import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import { statusCode } from "@libs/status-code";
import { BranchesInterface } from "@functions/interfaces/BranchesInterface/BranchesInterface";
import createBranchesController from "@functions/controllers/branches/createBranchesController";


/**
 * Its a demos for create item.
 *
 * @params {function} events
 *
 * @returns {string}
 */



const create: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async (
  event
) => {
  const { street, status, city, cp, locality, num_ext, num_int } =
    event.body as BranchesInterface;

  const data = {
    street,
    status,
    city,
    cp,
    locality,
    num_ext,
    num_int,
  };

  const rerieveData = await createBranchesController(data);

  if (!rerieveData) {
    return formatJSONResponse(statusCode.STATUS_CODE_FORM_ERROR, {
      success: false,
      message: "Brand dont created",
      data: rerieveData,
    });
  }

  return formatJSONResponse(statusCode.STATUS_CODE_CREATED, {
    success: true,
    message: "Brand created",
    data: rerieveData,
  });
};

export const main = middyfy(create);
