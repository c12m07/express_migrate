'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('medicamentos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        unique: true
      },
      precio: {
        type: Sequelize.INTEGER,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('medicamentos');
  }
};