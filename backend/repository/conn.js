import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
import User from './user.js';
import Product from './product.js';
import Evaluation from './evaluation.js';
import { seedUsers, seedProducts } from './seed.js';
import Cart from './cart.js';
import Order from './order.js';
import Chat from './chat.js';

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: 'donnut',
  user: 'root',
  password: '123456',
  host: 'localhost',
  port: 5432,
  clientMinMessages: 'notice',
});

const initModels = async (sequelize, ...models) => {
  models.forEach(async model => {
    const args = {
      sequelize,
      ...model.args
    }
    await model.class.init(model.model, args);
  });

  //relationship products and cart
  User.class.hasMany(Cart.class, { as: 'carts' });
  Cart.class.belongsTo(User.class, { as: 'user' });
  Product.class.hasMany(Cart.class, { as: 'carts' });
  Cart.class.belongsTo(Product.class, { as: 'product' });

  //relationship products and order
  User.class.hasMany(Order.class, { as: 'orders' });
  Order.class.belongsTo(User.class, { as: 'user' });
  Product.class.hasMany(Order.class, { as: 'orders' });
  Order.class.belongsTo(Product.class, { as: 'product' });

  //relationship products and evaluation
  User.class.hasMany(Evaluation.class, { as: 'evaluations' });
  Evaluation.class.belongsTo(User.class, { as: 'user' });
  Product.class.hasMany(Evaluation.class, { as: 'evaluations' });
  Evaluation.class.belongsTo(Product.class, { as: 'product' });
}

const seed = async () => {
  await seedUsers();
  await seedProducts();
}

const models = [User, Product, Cart, Order, Evaluation, Chat];

export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
    await initModels(sequelize, ...models);
    await sequelize.sync({ force: true });
    await new Promise(resolve => setTimeout(resolve, 3000));
    await seed();
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
};

