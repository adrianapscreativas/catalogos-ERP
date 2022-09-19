import BrandSchema from "@functions/schemas/BrandSchema";

class BrandTransformer {
  /**
   * Transforms an `BranchesInterface` into a plain object.
   */
  static transform(): Record<string, string> {
    throw new Error("This method is not implement yet.");
  }

  /**
   * Transforms a plain object into an `BranchesInterface`.
   */
  static reverse(model: Record<string, string>): BrandSchema {
    const brand = new BrandSchema();
    brand.name = model.name;
    brand.status = Boolean(model.status);

    return brand;
  }
}

export default BrandTransformer;
