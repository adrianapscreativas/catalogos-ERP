import { ModelInterface } from "@functions/interfaces/ModelInterface/ModelInterface";
import { IsDefined, IsNotEmpty, IsOptional } from "class-validator";

class ModelSchema implements ModelInterface {
  @IsOptional()
  id: number;

  @IsDefined()
  @IsNotEmpty()
  id_brand: string;

  @IsDefined()
  @IsNotEmpty()
  status: boolean;

  @IsDefined()
  @IsNotEmpty()
  name?: string;
}

export default ModelSchema;
