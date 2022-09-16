import BrandModel from "database/models/BrandModel";

/**
 * Controller for retrieve all model data from DB.
 */
const deleteBrandController = async (id: string) => {
  const brand = await BrandModel.findByPk(id);

  if (brand) {
    await brand.destroy();
    return 'Registro Eliminado';
  };
};

export default deleteBrandController;
