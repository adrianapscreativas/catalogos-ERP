import BranchesModel from 'database/models/Branches';
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
  static reverse(model: Record<string, string>): BranchesModel {
    return  new BranchesModel({
        street: model.street,
        status: Boolean(model.status),
        num_ext: model.num_ext,
        num_int: model.num_int,
        locality: model.locality,
        city: model.city,
        state: model.state,
        cp: model.cp,
    });
  }

}

export default BranchTransformer;
