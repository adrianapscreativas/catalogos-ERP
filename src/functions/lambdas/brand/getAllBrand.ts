import getBrandController from "@functions/controllers/brand/getBrandController";
import brandFilter from "@functions/filter/brandFilter";
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
  const { limit, pages, params } = brandFilter(event.queryStringParameters);
  const retrieveData = await getBrandController(params, limit, pages);

  if (retrieveData.count === 0 && retrieveData.rows.length === 0) {
    return formatJSONResponse(statusCode.STATUS_CODE_OK, {
      success: false,
      message: "data not found",
    });
  }
  console.log(retrieveData.rows.length);


  return formatJSONResponse(statusCode.STATUS_CODE_OK, {
    success: true,
    message: "data created",
    total_pages: Math.ceil(retrieveData.count / limit),
    per_page: limit,
    page: pages + 1,
    data: retrieveData,
  });
};

export const main = middyfy(getByPK);
