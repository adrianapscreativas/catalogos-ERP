
import getBranchesController from "@functions/controllers/branches/getBranchesController";
import branchesFilter from "@functions/filter/branchesFilter";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import { statusCode } from "../../../libs/status-code";

/**
 * Retrieve and filter data from db.
 *
 * @returns {string}
 */
const get: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async (
  event
) => {
  const { limit, pages, params } = branchesFilter(event.queryStringParameters);
  const retrieveData = await getBranchesController(params, limit, pages);

  if (retrieveData.count === 0 && retrieveData.rows.length === 0) {
    return formatJSONResponse(statusCode.STATUS_CODE_OK, {
      success: false,
      message: "data not found",
    });
  }

  return formatJSONResponse(statusCode.STATUS_CODE_OK, {
    success: true,
    message: "data created",
    total_pages: Math.ceil(retrieveData.count / limit),
    per_page: limit,
    page: pages + 1,
    data: retrieveData,
  });
};

export const main = middyfy(get);
