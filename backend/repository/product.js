import { Model, DataTypes } from '@sequelize/core';

class Product extends Model {
  static tableName = "product";
}

const ModelProduct = 
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      urlImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }

export default {class: Product, model: ModelProduct};