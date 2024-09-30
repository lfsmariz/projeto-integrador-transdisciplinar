import { Model, DataTypes } from '@sequelize/core';

class Evaluation extends Model {
}

const ModelEvaluation = {
    evaluation: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING(255),
        allowNull: true,
    }
}

const args = {
    indexes: [
        {
            unique: true,
            fields: ['userId', 'productId']
        }
    ]
}

export default { class: Evaluation, model: ModelEvaluation, args };