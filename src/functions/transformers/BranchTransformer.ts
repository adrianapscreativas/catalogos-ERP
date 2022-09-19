import BranchSchema from "@functions/schemas/BranchSchema";

class BranchTransformer {
  /**
   * Transforms an `BranchesInterface` into a plain object.
   */
  static transform(): Record<string, string> {
    throw new Error("This method is not implement yet.");
  }

  /**
   * Transforms a plain object into an `BranchesInterface`.
   */
  static reverse(model: Record<string, string>): BranchSchema {
    const branch = new BranchSchema();
    branch.city = model.city;
    branch.cp = model.cp;
    branch.locality = model.locality;
    branch.num_ext = model.num_ext;
    branch.num_int = model.num_int;
    branch.state = model.state;
    branch.status = Boolean(model.status);
    branch.street = model.street;

    return branch
  }
}

export default BranchTransformer;
