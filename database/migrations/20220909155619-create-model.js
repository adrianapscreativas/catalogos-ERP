'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Models', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type:Sequelize.DATE
      }
    });
    await queryInterface.addColumn(
      'Models', // nombre del modelo
      'id_brand', // nonbre d ela llave que agregare

      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Brands', // nombre dl  Target model
          key: 'id', // llave del nombre donde tarjeteo e Model
        },
        onUpdate: 'CASCADE',

      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Models');
  }
};
