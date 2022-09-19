import { BranchesInterface } from "@functions/interfaces/BranchesInterface/BranchesInterface";
import { IsDefined, IsNotEmpty, IsOptional } from "class-validator";

class BranchSchema implements BranchesInterface {
  @IsOptional()
  id: number;

  @IsDefined()
  @IsNotEmpty()
  street: string;

  @IsDefined()
  @IsNotEmpty()
  num_ext: string;

  @IsDefined()
  @IsNotEmpty()
  status: boolean;

  @IsOptional()
  num_int: string;

  @IsDefined()
  @IsNotEmpty()
  locality: string;

  @IsDefined()
  @IsNotEmpty()
  city: string;

  @IsDefined()
  @IsNotEmpty()
  state: string;

  @IsDefined()
  @IsNotEmpty()
  cp: string;
}

export default BranchSchema;
