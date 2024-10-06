import { Model, DataTypes } from '@sequelize/core';

class Cart extends Model {
}

const ModelCart = {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    customization: {
        type: DataTypes.STRING(1000),
        allowNull: true,
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