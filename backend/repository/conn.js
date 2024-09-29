import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
import User from './user.js';
import Product from './product.js';
import { seedUsers, seedProducts } from './seed.js';
import Cart from './cart.js';

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
    await model.class.init(model.model, { sequelize });
  });

  //relationships
  User.class.belongsToMany(Product.class, { through: Cart.class });
  Product.class.belongsToMany(User.class, { through: Cart.class });
}

const seed = async () => {
  await seedUsers();
  await seedProducts();
}

const models = [User, Product, Cart];

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

