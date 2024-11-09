import User from "../repository/user.js";
import Chat from "../repository/chat.js";
import { v4 as uuidv4 } from "uuid";
import { Op } from "@sequelize/core";

export const login = async (email, password) => {
    const user = await User.class.findOne({ where: { email } });
    if (!user) {
        throw new Error("User not found");
    }
    if (password !== user.password) {
        throw new Error("Invalid password");
    }
    return user;
}

export const register = async (name, cpf, email, password) => {
    const user = await User.class.create({ name, cpf, email, password });
    return "success";
}

export const addChat = async (owner, message) => {
    const chat = await Chat.class.findOne({ where: { owner, status: { [Op.ne]: "finished" } } });

    if (chat) {
        const id = chat.chatId;
        const addChat = await Chat.class.create({ owner, message, chatId: id, status: "pending"});
        return addChat;
    }

    const newChat = await Chat.class.create({ owner, message, chatId: uuidv4(), status: "pending" });
    return newChat;
}

export const chatMessages = async (ownerId) => {
    const messages = await Chat.class.findAll({ where: { owner: ownerId, status: { [Op.ne]: "finished" } } });
    return messages;
}

export const closeChat = async (chatId) => {
    await Chat.class.update({ status: "finished" }, { where: { chatId } });
}

export const retrieveDiscount = async (userId) => {
    const user = await User.class.findByPk(userId);
    return user.points;
}