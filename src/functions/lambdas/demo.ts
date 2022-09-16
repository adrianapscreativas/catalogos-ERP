import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import { BrandModel, Models } from "database/models/indexModel";
import { statusCode } from "../../libs/status-code";

/**
 * Retrieve and filter data from db.
 *
 * @returns {string}
 */
const demo: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async () => {
  const retrieveData = await Models.findAll({
    include: [
      {
        model: BrandModel,
        as: "model_to_brand",
        attributes: ['id','name']
      },
    ],
    
  });

  return formatJSONResponse(statusCode.STATUS_CODE_OK, {
    success: true,
    message: "data created",
    data: retrieveData,
  });
};

export const main = middyfy(demo);
