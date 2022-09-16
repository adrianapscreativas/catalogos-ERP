import getModelController from "@functions/controllers/model/getModelController";
import modelFilter from "@functions/filter/modelFilter";
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
const getByPK: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async (
  event
) => {
  const { pages, limit, params } = modelFilter(event.queryStringParameters);
  const retrieveData = await getModelController(limit, pages, params);

  if (retrieveData.count === 0 && retrieveData.rows.length === 0) {
    return formatJSONResponse(statusCode.STATUS_CODE_OK, {
      success: false,
      message: "data not found",
    });
  }
  return formatJSONResponse(statusCode.STATUS_CODE_OK, {
    success: true,
    message: "data found",
    total_pages: Math.ceil(retrieveData.count / limit),
    per_page: limit,
    page: pages + 1,
    data: retrieveData,
  });
};

export const main = middyfy(getByPK);
