'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING,
        field: 'last_name'
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING
      },
      createdOn: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'created_on'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};