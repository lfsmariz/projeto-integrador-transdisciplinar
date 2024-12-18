const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});