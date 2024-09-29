import { Model, DataTypes } from '@sequelize/core';

class User extends Model {
  static tableName = "user";
}

const ModelUser = 
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }

export default {class: User, model: ModelUser};