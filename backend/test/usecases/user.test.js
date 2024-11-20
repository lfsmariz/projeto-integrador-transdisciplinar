import { login, register, addChat, chatMessages, closeChat, retrieveDiscount } from '../../usecases/user.js';
import User from '../../repository/user.js';
import Chat from '../../repository/chat.js';

jest.mock('../../repository/user.js');
jest.mock('../../repository/chat.js');

describe('User Use Cases', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('login - deve retornar usuário se email e senha estiverem corretos', async () => {
        const mockUser = { email: 'test@example.com', password: 'password' };
        User.class.findOne.mockResolvedValue(mockUser);

        const user = await login('test@example.com', 'password');
        expect(user).toEqual(mockUser);
    });

    test('login - deve lançar erro se usuário não for encontrado', async () => {
        User.class.findOne.mockResolvedValue(null);

        await expect(login('test@example.com', 'password')).rejects.toThrow('User not found');
    });

    test('login - deve lançar erro se a senha for inválida', async () => {
        const mockUser = { email: 'test@example.com', password: 'password' };
        User.class.findOne.mockResolvedValue(mockUser);

        await expect(login('test@example.com', 'wrongpassword')).rejects.toThrow('Invalid password');
    });

    test('register - deve criar um novo usuário', async () => {
        User.class.create.mockResolvedValue({});

        const result = await register('Test User', '12345678900', 'test@example.com', 'password');
        expect(result).toBe('success');
    });

    test('addChat - deve adicionar uma nova mensagem ao chat existente', async () => {
        const mockChat = { chatId: 'chat-1', status: 'pending' };
        Chat.class.findOne.mockResolvedValue(mockChat);
        Chat.class.create.mockResolvedValue({});

        const result = await addChat('owner-1', 'Hello');
        expect(result).toBeDefined();
    });

    test('chatMessages - deve retornar mensagens do chat', async () => {
        const mockMessages = [{ message: 'Hello' }];
        Chat.class.findAll.mockResolvedValue(mockMessages);

        const messages = await chatMessages('owner-1');
        expect(messages).toEqual(mockMessages);
    });

    test('closeChat - deve atualizar o status do chat para finished', async () => {
        await closeChat('chat-1');
        expect(Chat.class.update).toHaveBeenCalledWith({ status: 'finished' }, { where: { chatId: 'chat-1' } });
    });

    test('retrieveDiscount - deve retornar pontos do usuário', async () => {
        const mockUser = { points: 100 };
        User.class.findByPk.mockResolvedValue(mockUser);

        const points = await retrieveDiscount('user-1');
        expect(points).toBe(100);
    });
});