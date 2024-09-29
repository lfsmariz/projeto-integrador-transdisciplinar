import { Model, DataTypes } from '@sequelize/core';

class Order extends Model {
}

const ModelOrder = 
    {
      orderId: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }

export default { class: Order, model: ModelOrder, args: {} };