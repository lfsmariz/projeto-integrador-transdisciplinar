import { Model, DataTypes } from '@sequelize/core';

class Chat extends Model {
}

const ModelChat =
{
    chatId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}

export default { class: Chat, model: ModelChat, args: {} };