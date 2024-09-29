import User from "../repository/user.js";
import Product from "../repository/product.js";
import { v4 as uuidv4 } from "uuid";

const seedUsers = async () => {
    const users = [
        { name: "teste1", password: "123456", email: "teste1@gmail.com", cpf: "12345678901" },
        { name: "teste2", password: "123456", email: "teste2@gmail.com", cpf: "12345678902" },
        { name: "teste3", password: "123456", email: "teste3@gmail.com", cpf: "12345678903" },
    ];

    for (const user of users) {
        await User.class.create(user);
    }
};

seedUsers()
    .then(() => console.log("Usuários de teste criados com sucesso!"))
    .catch((error) => console.error("Erro ao criar usuários de teste:", error));

const categories = ["normal", "especial"];

const seedProducts = async () => {
    const products = Array.from({ length: 20 }, (_, index) => ({
        id: uuidv4(), // Exemplo de ID único
        name: `Donnut ${index + 1}`,
        description: `Delicioso donnut sabor ${index + 1}`,
        urlImage: `http://example.com/donnut${index + 1}.jpg`,
        price: (1.5 + index * 0.5).toFixed(2), // Preço variando de 1.50 a 10.50
        stock: Math.floor(Math.random() * 100) + 1, // Estoque aleatório entre 1 e 100
        category: categories[Math.floor(Math.random() * categories.length)], // Categoria aleatória
    }));

    for (const product of products) {
        await Product.class.create(product);
    }
};

seedProducts()
    .then(() => console.log("Produtos de teste criados com sucesso!"))
    .catch((error) => console.error("Erro ao criar produtos de teste:", error));

export { seedUsers, seedProducts };
