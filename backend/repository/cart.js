import { Model, DataTypes } from '@sequelize/core';

class Cart extends Model {
}

const ModelCart = {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}

const args = {
    indexes: [
        {
            unique: true,
            fields: ['userId', 'productId']
        }
    ]
}

export default { class: Cart, model: ModelCart, args };