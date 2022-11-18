const Sequelize = require('sequelize');
//impor connection
const { db } = require('./config/database.js');
const Medicamentos = require('./medicamentos.js')

const { DataTypes } = Sequelize
const Pacientes = db.define('pacientes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  enrevision: {
    type: DataTypes.BOOLEAN,
  },
  fechaingreso: {
    type: DataTypes.DATE,
    field: 'fechaingreso',
    defaultValue: Sequelize.NOW
  },
  medicacion: {
    type: DataTypes.STRING,
    field: 'medicacion',
    references: {
      model: Medicamentos,
      key: 'name'
    }
  },
  dealta: {
    type: DataTypes.BOOLEAN,
  }}, {
    tableName: 'pacientes'
  });

export default Pacientes;