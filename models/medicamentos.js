import { Sequelize } from "sequelize";
import db from '../config/database.js';

const { DataTypes } = Sequelize
const Medicamentos = db.define('medicamentos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
  },
  precio: {
    type: DataTypes.INTEGER,
  }}, {
    tableName: 'medicamentos'
  });

export default Medicamentos 