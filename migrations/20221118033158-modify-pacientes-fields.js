'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('pacientes', 'medicacion', {
      type: Sequelize.STRING,
      field: 'medicacion',
      references: {
        model: 'medicamentos',
        key: 'name'
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('pacientes', 'medicacion');
  },
};
