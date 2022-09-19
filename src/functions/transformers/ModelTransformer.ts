import ModelSchema from "@functions/schemas/ModelSchema";

class ModelTransformer {
  /**
   * Transforms an `BranchesInterface` into a plain object.
   */
  static transform(): Record<string, string> {
    throw new Error("This method is not implement yet.");
  }

  /**
   * Transforms a plain object into an `BranchesInterface`.
   */
  static reverse(model: Record<string, string>): ModelSchema {
    const models = new ModelSchema();
    models.id_brand = model.id_brand;
    models.name = model.name;
    models.status = Boolean(model.status);

    return models;
  }
}

export default ModelTransformer;
