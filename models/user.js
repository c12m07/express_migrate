import { Sequelize } from 'sequelize'
import db from '../config/database.js'
 
const { DataTypes } = Sequelize
 
const User = db.define('users', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING,
    field: 'last_name'
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING
  },
  createdOn: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_on'
  }
},{
  tableName: 'users'
})
 
export default User