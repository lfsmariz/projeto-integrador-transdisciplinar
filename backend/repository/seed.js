import User from "../repository/user.js";
import Product from "../repository/product.js";

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
const fixedUuids = [
    "e7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "f7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "g7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "h7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "i7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "j7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "k7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "l7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "m7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "n7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "o7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "p7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "q7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "r7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "s7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "t7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "u7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "v7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "w7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "x7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e",
    "y7b3c1a0-1f3e-4c5b-8c3e-1f3e4c5b8c3e"
];



const seedProducts = async () => {
    const products = Array.from({ length: 20 }, (_, index) => ({
        id: fixedUuids[index], // Exemplo de ID único
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
