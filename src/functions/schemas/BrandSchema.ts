
import { BrandInterface } from "@functions/interfaces/BrandsInterface/BrandsInterfaces";
import { IsDefined, IsNotEmpty, IsOptional } from "class-validator";

class BrandSchema implements BrandInterface {
  @IsOptional()
  id: number;

  @IsDefined()
  @IsNotEmpty()
  status: boolean;

  @IsDefined()
  @IsNotEmpty()
  name?: string;
}

export default BrandSchema;
