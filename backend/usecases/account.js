import User from "../repository/user.js";

export const login = async (email, password) => {
    const user = await User.class.findOne({ where: { email } });
    if (!user) {
        throw new Error("User not found");
    }
    if (password !== user.password) {
        throw new Error("Invalid password");
    }
    return "success";
}

export const register = async (name, cpf, email, password) => {
    const user = await User.class.create({ name, cpf, email, password });
    return "success";
}