
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import { statusCode } from "@libs/status-code";
import { ModelInterface } from "@functions/interfaces/ModelInterface/ModelInterface";
import createModelController from "@functions/controllers/model/createModelController";

/**
 * Its a demos for create item.
 *
 * @params {function} events
 *
 * @returns {string}
 */

const create: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async (event) => {

  const { name,id_brand,status } = event.body as ModelInterface;

  if(name.length === 0 || id_brand.length === 0){
    return formatJSONResponse(statusCode.STATUS_CODE_FORM_ERROR,{
      succes: false,
      message: "please fill in the parameters"
    })
  }
  const data = {
    name,
    id_brand,
    status

  };

  const rerieveData = await createModelController(data);

  return formatJSONResponse(statusCode.STATUS_CODE_CREATED,{
    success: true,
    message: "Model created",
    data: rerieveData,
  });
};

export const main = middyfy(create);
