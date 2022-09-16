import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import { statusCode } from "@libs/status-code";
import createBranchesController from "@functions/controllers/branches/createBranchesController";
import BranchTransformer from "@functions/transformers/BranchTransformer";


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
  const branch = BranchTransformer.reverse(event.body as any);

  const retrieveData = await createBranchesController(branch);

  if (Array.isArray(retrieveData)) {
    return formatJSONResponse(statusCode.STATUS_CODE_FORM_ERROR, {
      success: false,
      message: "Unsatisfied model",
      data: retrieveData,
    });
  }

  return formatJSONResponse(statusCode.STATUS_CODE_CREATED, {
    success: true,
    message: "Brand created",
    data: retrieveData,
  });
};

export const main = middyfy(create);
