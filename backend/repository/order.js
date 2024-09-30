import { Model, DataTypes } from '@sequelize/core';

class Order extends Model {
}

const ModelOrder = 
    {
      orderId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    evaluation: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    }

export default { class: Order, model: ModelOrder, args: {} };