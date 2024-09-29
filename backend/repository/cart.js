import { Model, DataTypes } from '@sequelize/core';

class Cart extends Model {
}

const ModelCart = {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}

export default {class: Cart, model: ModelCart};